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

function buscar(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.buscar(idUsuario)
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

function buscarHiragana(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.buscarHiragana(idUsuario)
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

function buscarKatakana(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.buscarKatakana(idUsuario)
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

function buscarKanji(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.buscarKanji(idUsuario)
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
    console.log(`Recuperando os últimos dados`);

    dadosModel.exibirKPI(idUsuario)
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

function exibirKPIHiragana(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.exibirKPIHiragana(idUsuario)
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

function exibirKPIKatakana(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.exibirKPIKatakana(idUsuario)
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

function exibirKPIKanji(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(`Recuperando os últimos dados`);

    dadosModel.exibirKPIKanji(idUsuario)
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
    buscar,
    buscarHiragana,
    buscarKatakana,
    buscarKanji,
    exibirKPI,
    exibirKPI2,
    exibirKPIHiragana,
    exibirKPIKatakana,
    exibirKPIKanji
}