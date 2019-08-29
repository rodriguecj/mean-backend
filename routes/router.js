'use strict'

const express = require('express');
const NoticiasController = require('../controller/noticias');

var router = express.Router();

router.post('/save-noticia', NoticiasController.saveNoticia);
router.get('/noticia/:id?', NoticiasController.getNoticia);
router.get('/noticias', NoticiasController.getNoticias);
router.put('/noticia/:id', NoticiasController.UpdateNoticia);
router.delete('/noticia/:id', NoticiasController.deleteNoticia);

module.exports = router;