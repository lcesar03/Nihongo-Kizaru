var database = require("../database/config");

function buscar(limite) {

    var instrucaoSql = `SELECT WHERE fk_aquario = ${idAquario} ORDER BY id DESC LIMIT ${limite}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar() {

    var instrucaoSql = `SELECT  WHERE fk_aquario = ${idAquario} ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar,
    atualizar
}
