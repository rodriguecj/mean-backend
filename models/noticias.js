'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var NoticiasSchema = Schema({
    titulo: String,
    descripcion: String,
})

module.exports = mongoose.model('Noticias', NoticiasSchema);