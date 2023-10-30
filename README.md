## - Repositorio del proyecto: https://github.com/Gaston-Valentini/user-authentication-system
## - Título: User Authentication System
## - Desarrollador: Gastón Valentini
## - Descripción: Proyecto personal desarrollado durante el cursado del bootcamp full-stack en GeeksHubs Academy.
## - Objetivo: Poner en práctica los conocimientos aprendidos en el bootcamp y reforzar el manejo de las tecnologías a utilizar.
## Tecnologías utilizadas:
#### * Node
#### * Express
#### * TypeScript
#### * TypeORM
#### * MySQL
## - Estructura del proyecto:
#### El proyecto está desarrollado utilizando el modelo vista controlador (MVC). Adicionalmente tiene una carpeta middlewares, la cual contiene únicamente el middleware que se encarga de la verificación con jsonwebtoken. También se incluye una carpeta con las migraciones pertinentes de la base de datos.
## - Como iniciar el proyecto:
#### * Descargar dependencias: npm install
#### * Iniciar aplicación en modo de desarrollo: npm run dev
#### * Iniciar aplicación en modo de producción: npm run start
## - Endpoints
#### * /register (Se encarga de la creación de usuarios en la base de datos)
#### * /login (Se encarga de la autenticación de un usuario, para así otorgarle un token)
#### * /user (Verificará el token y en caso de ser válido obtendrá la información del usuario contenido en el token)