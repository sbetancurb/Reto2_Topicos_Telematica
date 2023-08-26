# Microservicio de Pedidos

Este es el microservicio encargado de gestionar los pedidos en la plataforma.

## Instalación

1. Clona este repositorio.
2. Accede a la carpeta `microservicio_pedidos`.

## Uso

1. Instala las dependencias: `npm install`.
2. Inicia el microservicio: `npm start`.
3. Accede a los endpoints API definidos en `app/routes/order_routes.js`.

## Endpoints

- `POST /create-order`: Crea un nuevo pedido.

## Pruebas

1. Instala las dependencias de prueba: `npm install --only=dev`.
2. Ejecuta las pruebas: `npm test`.

## Docker

Para ejecutar el microservicio en un contenedor Docker:

1. Construye la imagen: `docker build -t microservicio-pedidos .`
2. Ejecuta el contenedor: `docker run -p 3000:3000 -d microservicio-pedidos`