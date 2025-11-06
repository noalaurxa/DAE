# 🎮 PokéDex Explorer

Aplicación web interactiva para explorar Pokémon, desarrollada con **React** y **Tailwind CSS**. Muestra información detallada de cada Pokémon, incluyendo altura, peso, tipo y estadísticas.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

---

## 🚀 Demo en Vivo (Netlify)

Puedes ver la aplicación desplegada y probarla aquí:

**https://practice3-noa-dae.netlify.app/**


---

## 📺 Video Demo (YouTube)

Mira un recorrido rápido de las funcionalidades del proyecto:

**https://youtu.be/x6eYVg1FIS8?si=T9OhYi35LaWAe_tN**

---

## ✨ Características

* **Listado Completo:** Visualiza todos los Pokémon con sus imágenes, tipos y estadísticas.
* **Buscador Integrado:** Filtra Pokémon por nombre o ID de manera instantánea.
* **Estilos Modernos:** Interfaz con efectos de *glassmorphism*, animaciones y detalles en neón.
* **Diseño Responsive:** Totalmente adaptable a dispositivos móviles, tablets y escritorio.
* **Notificaciones:** Alertas y avisos de carga utilizando *React Toastify*.

---

## 🛠️ Stack de Tecnologías

* **React** (v18+)
* **Tailwind CSS**
* **React Router**
* **React Toastify**
* **PokéAPI** (Fuente de datos)

---

## ⚡ Instalación y Ejecución Local

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/noalaurxa/DAE.git](https://github.com/noalaurxa/DAE.git)
    ```

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd DAE/pokedex-react
    ```

3.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecutar la aplicación:**
    ```bash
    npm start
    ```
    La aplicación se abrirá automáticamente en `http://localhost:3000`.

---

## 📁 Estructura del Proyecto

pokedex-react/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ PokemonCard.jsx
│  │  └─ SearchBar.jsx
│  ├─ services/
│  │  └─ api.js
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  └─ Entities.jsx
│  ├─ App.jsx
│  └─ index.jsx
├─ package.json
├─ tailwind.config.js
└─ README.md

---

## ⚙️ Configuración para Despliegue (Netlify)

Para asegurar un despliegue exitoso en Netlify, utiliza la siguiente configuración:

* **Base directory:** `pokedex-react`
* **Build command:** `npm run build`
* **Publish directory:** `build`

---

## 🤝 Contribuciones

Si deseas contribuir a este proyecto, ¡eres bienvenido!

1.  Haz un **Fork** del repositorio.
2.  Crea tu propia rama: `git checkout -b feature/nueva-funcionalidad`
3.  Realiza tus cambios y haz commit: `git commit -m "Agrega nueva funcionalidad"`
4.  Envía tus cambios: `git push origin feature/nueva-funcionalidad`
5.  Abre un **Pull Request**.

---

## 📝 Licencia

Distribuido bajo la Licencia MIT.

© 2025
