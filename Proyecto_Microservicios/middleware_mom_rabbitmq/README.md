# Middleware MOM RabbitMQ

Este middleware actúa como productor y consumidor de mensajes utilizando RabbitMQ.

## Instalación

1. Clona este repositorio.
2. Accede a la carpeta `middleware_mom_rabbitmq`.

## Uso

1. Instala las dependencias: `npm install`.
2. Asegúrate de que el servidor RabbitMQ esté funcionando.
3. Actualiza la configuración en `config.js` con la URL adecuada.
4. Inicia los consumidores de mensajes: `node app/consumers/order_consumer.js`.
5. Utiliza el productor para publicar mensajes: `node app/producers/order_producer.js`.

## Configuración

1. Actualiza la URL de RabbitMQ en `config.js`.

## Pruebas

1. Instala las dependencias de prueba: `npm install --only=dev`.
2. Ejecuta las pruebas: `npm test`.

## Docker

Para ejecutar el middleware en un contenedor Docker:

1. Construye la imagen: `docker build -t middleware-mom-rabbitmq .`
2. Ejecuta el contenedor: `docker run -p 3000:3000 -d middleware-mom-rabbitmq`