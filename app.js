'use strict'

const express = require('express');
const body_parser = require('body-parser');

const app = express();

//cargar archivos de rutas

const noticias_routes = require('./routes/router');

//midelware
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('/api', noticias_routes)

module.exports = app;