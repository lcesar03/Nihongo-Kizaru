var dadosModel = require("../models/dadosModel");

function buscar(req, res) {
    var limite = 7;
    console.log(`Recuperando os últimos ${limite} dados`);

    dadosModel.buscar(limite)
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

function atualizar(req, res) {

    console.log(`Recuperando dados em tempo real`);

    dadosModel.atualizar()
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
    buscar,
    atualizar
}