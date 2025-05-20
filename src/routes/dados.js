var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get(`/buscarPizza/:idUsuario`, function (req, res) {
    dadosController.buscarPizza(req, res);
});

router.get(`/buscar/:idUsuario`, function (req, res) {
    dadosController.buscar(req, res);
});

router.get(`/buscarHiragana/:idUsuario`, function (req, res) {
    dadosController.buscarHiragana(req, res);
});

router.get(`/buscarKatakana/:idUsuario`, function (req, res) {
    dadosController.buscarKatakana(req, res);
});

router.get(`/exibirKPI/:idUsuario`, function (req, res) {
    dadosController.exibirKPI(req, res);
});

router.get(`/exibirKPI2/:idUsuario`, function (req, res) {
    dadosController.exibirKPI2(req, res);
});

router.get(`/exibirKPIHiragana/:idUsuario`, function (req, res) {
    dadosController.exibirKPIHiragana(req, res);
});

router.get(`/exibirKPIKatakana/:idUsuario`, function (req, res) {
    dadosController.exibirKPIKatakana(req, res);
});

module.exports = router;