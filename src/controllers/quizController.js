var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var fkUsuario = req.body.idUsuarioVincularServer;
    var fkQuiz = req.body.idQuizVincularServer;

    quizModel.cadastrar(fkUsuario, fkQuiz)
        .then(function (resposta) {
            res.json(resposta)
            res.status(200).send("Tentativa criada com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function atualizar(req, res) {
    var nota = req.body.notaServer;
    var pctAcertos = req.body.pctAcertosServer;
    var pctErros = req.body.pctErrosServer;
    var idTentativa = req.body.idTentativaServer;

    quizModel.atualizar(nota, pctAcertos, pctErros, idTentativa)
        .then(function (resposta) {
            res.json(resposta)
            res.status(200).send("Tentativa atualizada com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        }
    )
}

module.exports = {
    cadastrar,
    atualizar
}