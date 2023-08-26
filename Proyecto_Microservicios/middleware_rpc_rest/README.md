# Middleware RPC REST

Este middleware actúa como cliente REST para realizar comunicaciones RPC con otros microservicios.

## Instalación

1. Clona este repositorio.
2. Accede a la carpeta `middleware_rpc_rest`.

## Uso

1. Instala las dependencias: `npm install`.
2. Asegúrate de que los servicios RPC REST de los microservicios remotos estén funcionando.
3. Actualiza la configuración en `config.js` con las direcciones adecuadas.
4. Inicia el middleware: `npm start`.

## Configuración

1. Actualiza la URL del servidor RPC REST en `config.js`.

## Pruebas

1. Instala las dependencias de prueba: `npm install --only=dev`.
2. Ejecuta las pruebas: `npm test`.

## Docker

Para ejecutar el middleware en un contenedor Docker:

1. Construye la imagen: `docker build -t middleware-rpc-rest .`
2. Ejecuta el contenedor: `docker run -p 3000:3000 -d middleware-rpc-rest`