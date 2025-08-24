document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#item-form");
    const inputName = document.querySelector("#item-name");
    const inputDesc = document.querySelector("#item-desc");
    const list = document.querySelector(".items-container");

    const header = document.querySelector("header h1");
    if (header) {
        header.style.transition = "transform 0.3s ease, color 0.3s ease";
        header.addEventListener("mouseover", () => {
            header.style.transform = "scale(1.1)";
            header.style.color = "#ffeb3b";
        });
        header.addEventListener("mouseout", () => {
            header.style.transform = "scale(1)";
            header.style.color = "white";
        });
    }

    // Función para eliminar item desde API
    async function deleteItem(li, itemId) {
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        try {
            const response = await fetch(`/api/items/${itemId}/delete/`, {
                method: "DELETE",
                headers: {
                    "X-CSRFToken": csrfToken
                }
            });
            const result = await response.json();
            if (result.success) {
                li.remove();
            } else {
                alert("No se pudo eliminar el item");
            }
        } catch (err) {
            console.error(err);
            alert("Error eliminando el item");
        }
    }

    // Enviar formulario al API
    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const name = inputName.value.trim();
            const description = inputDesc.value.trim();

            if (!name || !description) return alert("⚠️ Completa todos los campos");

            const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

            try {
                const response = await fetch("/api/items/create/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": csrfToken
                    },
                    body: JSON.stringify({ name, description })
                });

                if (!response.ok) throw new Error("Error creando el item");

                const item = await response.json();

                // Agregar visualmente
                const li = document.createElement("li");
                li.classList.add("fade-in");
                li.innerHTML = `
                    <div class="item-card">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <small>Creado: ${new Date(item.created_at).toLocaleString()}</small>
                        <span class="delete-btn">❌</span>
                    </div>
                `;
                list.appendChild(li);
                li.querySelector(".delete-btn").addEventListener("click", () => deleteItem(li, item.id));
                inputName.value = "";
                inputDesc.value = "";
            } catch (err) {
                console.error(err);
                alert("⚠️ No se pudo agregar el item");
            }
        });
    }

    // Eliminar ítems ya existentes
    document.querySelectorAll(".items-container .delete-btn").forEach(btn => {
        const li = btn.closest("li");
        const itemName = li.querySelector("h3").textContent;
        // Suponiendo que el id no estaba en el HTML: sería mejor incluir data-id en cada li
        const itemId = li.dataset.id;
        btn.addEventListener("click", () => deleteItem(li, itemId));
    });
});
