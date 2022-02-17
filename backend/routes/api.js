var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

router.get('/novedades', async function (req, res, next) {
    try {
        let novedades = await novedadesModel.getNovedades();

        novedades = novedades.map(novedad => {
            if (novedad.img_id) {
                const imagen = cloudinary.image(novedad.img_id, {
                    width: 960,
                    height: 200,
                    crop: 'fill'
                });
                return {
                    ...novedad,
                    imagen
                }
            } else {
                return {
                    ...novedad,
                    imagen: ''
                }
            }
        });

        res.json(novedades);

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;