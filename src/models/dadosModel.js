var database = require("../database/config");

function buscar(idUsuario, limite) {

    var instrucaoSql = `SELECT nota FROM tentativas WHERE fkUsuario = '${idUsuario}' ORDER BY idTentativa DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(idUsuario) {

    var instrucaoSql = `SELECT nota FROM tentativas WHERE fkUsuario = '${idUsuario}' ORDER BY idTentativa DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar,
    atualizar
}
