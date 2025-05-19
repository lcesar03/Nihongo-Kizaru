var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get(`/buscar/:idUsuario`, function (req, res) {
    dadosController.buscar(req, res);
});

router.get(`/atualizar/:idUsuario`, function (req, res) {
    dadosController.atualizar(req, res);
})

module.exports = router;