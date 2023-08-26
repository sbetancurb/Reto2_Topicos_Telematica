# Middleware RPC gRPC

Este middleware actúa como cliente gRPC para realizar comunicaciones RPC con otros microservicios.

## Instalación

1. Clona este repositorio.
2. Accede a la carpeta `middleware_rpc_grpc`.

## Uso

1. Instala las dependencias: `npm install`.
2. Asegúrate de que los servicios gRPC de los microservicios remotos estén funcionando.
3. Inicia el middleware: `npm start`.

## Configuración

1. Asegúrate de tener las definiciones gRPC correctas en la carpeta `proto`.
2. Actualiza las rutas y configuraciones según tus necesidades en `middleware_rpc_grpc.js`.

## Pruebas

1. Instala las dependencias de prueba: `npm install --only=dev`.
2. Ejecuta las pruebas: `npm test`.

## Docker

Para ejecutar el middleware en un contenedor Docker:

1. Construye la imagen: `docker build -t middleware-rpc-grpc .`
2. Ejecuta el contenedor: `docker run -p 3000:3000 -d middleware-rpc-grpc`