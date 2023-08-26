// server.js
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use('/users', routes.userRoutes);
// Agrega más rutas para otros recursos

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
