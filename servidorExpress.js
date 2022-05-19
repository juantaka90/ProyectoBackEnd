const productos = require ('./productos.js');

const express = require('express');
const Contenedor = require('./clases.js');
const app = express();

const contenedor1 = new Contenedor("contenedora.txt")

app.get('/productos', (req, res) => {
    res.send((productos));
});

app.get('/productosRandom', async (req, res) => {
    const productosId = Math.floor(Math.random()*8);
    const producto = await contenedor1.getById(productosId);
    res.send(producto);
});

app.listen(8080, () => {
    console.log('servidor UP');
})