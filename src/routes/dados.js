var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get("/buscar", function (req, res) {
    dadosController.buscar(req, res);
});

router.get("/atualizar", function (req, res) {
    dadosController.atualizar(req, res);
})

module.exports = router;