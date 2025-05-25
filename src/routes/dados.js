var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get(`/buscarPizza/:idUsuario`, function (req, res) {
    dadosController.buscarPizza(req, res);
});

router.get(`/buscarGeral/:idUsuario`, function (req, res) {
    dadosController.buscarGeral(req, res);
});

router.get(`/buscar/:idUsuario/:quiz`, function (req, res) {
    dadosController.buscar(req, res);
});

router.get(`/exibirKPIGeral/:idUsuario`, function (req, res) {
    dadosController.exibirKPIGeral(req, res);
});

router.get(`/exibirKPI2/:idUsuario`, function (req, res) {
    dadosController.exibirKPI2(req, res);
});

router.get(`/exibirKPI/:idUsuario/:quiz`, function (req, res) {
    dadosController.exibirKPI(req, res);
});

module.exports = router;