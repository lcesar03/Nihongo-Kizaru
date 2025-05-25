var dadosModel = require("../models/dadosModel");

function buscarPizza(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.buscarPizza(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function buscarGeral(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.buscarGeral(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function buscar(req, res) {
    var idUsuario = req.params.idUsuario;
    var quiz = req.params.quiz;
    console.log(`Recuperando os últimos dados`);

    dadosModel.buscar(idUsuario, quiz)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function exibirKPIGeral(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.exibirKPIGeral(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function exibirKPI2(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.exibirKPI2(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function exibirKPI(req, res) {
    var idUsuario = req.params.idUsuario;
    var quiz = req.params.quiz;
    console.log(`Recuperando os últimos dados`);

    dadosModel.exibirKPI(idUsuario, quiz)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

module.exports = {
    buscarPizza,
    buscarGeral,
    buscar,
    exibirKPIGeral,
    exibirKPI2,
    exibirKPI
}