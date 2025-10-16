# 📦 OrderFlow API

API REST desarrollada con Django y Django REST Framework (DRF) para la gestión de pedidos y clientes.  
Permite realizar operaciones CRUD completas, búsqueda por filtros y visualización de la relación entre entidades.  
No utiliza el panel de administración de Django; todo se gestiona mediante endpoints.

---

## ⚙️ Tecnologías utilizadas

- 🐍 **Python 3**
- 🧩 **Django**
- ⚙️ **Django REST Framework**

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio:
```bash
git clone https://github.com/noalaurxa/DAE.git
```
### 2️⃣ Entrar al proyecto:
```bash
cd DAE/Practice2
```
### 3️⃣ Crear y activar un entorno virtual:
```bash
py -m venv venv
venv\Scripts\activate   # En Windows
source venv/bin/activate   # En Mac/Linux
```
### 4️⃣ Instalar dependencias:
```bash
pip install django djangorestframework
```
### 5️⃣ Ejecutar migraciones:
```bash
python manage.py migrate
```
### 6️⃣ Levantar el servidor:
```bash
python manage.py runserver
```
Luego, abre en tu navegador:

👉 http://127.0.0.1:8000/api/pedidos/
👉 http://127.0.0.1:8000/api/clientes/

## 📚 Endpoints principales

### Pedidos (/api/pedidos/)


| Método      | URL                     | Descripción                                    |
| ----------- | ----------------------- | ---------------------------------------------- |
| GET         | `/api/pedidos/`         | Listar todos los pedidos                       |
| POST        | `/api/pedidos/`         | Crear un nuevo pedido                          |
| GET         | `/api/pedidos/{id}/`    | Ver un pedido específico                       |
| PUT / PATCH | `/api/pedidos/{id}/`    | Editar un pedido existente                     |
| DELETE      | `/api/pedidos/{id}/`    | Eliminar un pedido                             |
| GET         | `/api/pedidos/?search=` | Buscar pedidos por estado o nombre del cliente |

### Clientes (/api/clientes/)

| Método      | URL                   | Descripción                 |
| ----------- | --------------------- | --------------------------- |
| GET         | `/api/clientes/`      | Listar todos los clientes   |
| POST        | `/api/clientes/`      | Crear un cliente            |
| GET         | `/api/clientes/{id}/` | Ver un cliente específico   |
| PUT / PATCH | `/api/clientes/{id}/` | Editar un cliente existente |
| DELETE      | `/api/clientes/{id}/` | Eliminar un cliente         |

### 🔗 Relación entre entidades

Cada pedido está vinculado a un cliente mediante una relación ForeignKey.
Al listar pedidos, se muestra el nombre del cliente asociado dentro del JSON de respuesta.

### 🔍 Búsqueda con filtros
La API permite buscar pedidos según el estado del pedido o el nombre del cliente utilizando el parámetro search en la URL:
```bash
GET /api/pedidos/?search=entregado
GET /api/pedidos/?search=naudy
```
### 🔍 Validación del Video
En el video se muestra:
La ejecución completa de la API (listado, creación, edición, eliminación, búsqueda y relación).
El código abierto en el editor.
Las pruebas realizadas directamente desde el navegador, sin necesidad de Postman.

📺 Video de demostración:
👉 https://youtu.be/-rNM6LsQ77g

### AUTOR
Naudy Noa Laura
Examen 2 – Django REST Framework (OrderFlow API)
