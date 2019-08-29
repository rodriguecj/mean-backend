'use strict'

const Noticia = require('../models/noticias');

let controller = {
    /* Post */
    saveNoticia: function(req, res) {
        let noticia = new Noticia();
        let params = req.body;
        noticia.titulo = params.titulo;
        noticia.descripcion = params.descripcion;

        noticia.save((err, noticiaStored) => {
            if (err) return res.status(500).send({
                massege: 'Error al guardar la noticia'
            })
            if (!noticiaStored) return res.status(402).send({
                massege: 'No se ha podido guardar la noticia'
            })
            return res.status(200).send({
                noticia: noticiaStored
            })
        })
    },
    /* Get Todos las noticias */
    getNoticias: function(req, res) {
        Noticia.find({}).exec((err, noticias) => {
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' })
            if (!noticias) return res.status(404).send({ message: 'No existe Noticia' })
            return res.status(200).send({ noticias })
        })
    },

    /*PUT Actualizar noticia */
    UpdateNoticia: function(req, res) {
        let noticiaId = req.params.id;
        let update = req.body;
        if (noticiaId == null) return res.status(500).send({ message: 'La noticia no existe' });
        Noticia.findOneAndUpdate({ _id: noticiaId }, update, { new: true }, (err, noticiaUpdate) => {
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' })
            if (!noticiaUpdate) return res.status(404).send({ message: 'La Noticia no existe' })
            return res.status(200).send({
                noticia: noticiaUpdate
            })
        })
    },
    getNoticia: function(req, res) {
        let noticiaId = req.params.id;
        if (noticiaId == null) return res.status(500).send({ message: 'La noticia no existe' });
        Noticia.findById(noticiaId, (err, noticia) => {
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' })
            if (!noticia) return res.status(404).send({ message: 'La noticia no existe' })
            return res.status(200).send({
                noticia
            })
        })
    },
    /* Delete noticia */
    deleteNoticia: function(req, res) {
        let noticiaId = req.params.id;

        if (noticiaId == null) return res.status(500).send({ message: 'La noticia no existe' });
        Noticia.findOneAndDelete({ _id: noticiaId }, (err, noticiaRemove) => {
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' })
            if (!noticiaRemove) return res.status(404).send({ message: 'La noticia no existe' })
            return res.status(200).send({ noticiaRemove })
        })

    }
}

module.exports = controller;