# Microservicio de Usuarios

Este es el microservicio encargado de gestionar los usuarios en la plataforma.

## Instalación

1. Clona este repositorio.
2. Accede a la carpeta `microservicio_usuarios`.

## Configuración

1. Asegúrate de tener una base de datos MongoDB configurada y funcionando.
2. Actualiza la configuración de la base de datos en `config/database.js`.

## Uso

1. Instala las dependencias: `npm install`.
2. Inicia el microservicio: `npm start`.
3. Accede a los endpoints API definidos en `app/routes/user_routes.js` y `app/routes/auth_routes.js`.

## Endpoints

- `POST /register`: Registra un nuevo usuario.
- `POST /login`: Autentica al usuario y devuelve un token de acceso.

## Pruebas

1. Instala las dependencias de prueba: `npm install --only=dev`.
2. Ejecuta las pruebas: `npm test`.

## Docker

Para ejecutar el microservicio en un contenedor Docker:

1. Construye la imagen: `docker build -t microservicio-usuarios .`
2. Ejecuta el contenedor: `docker run -p 3000:3000 -d microservicio-usuarios`