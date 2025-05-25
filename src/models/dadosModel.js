var database = require("../database/config");

function buscarPizza(idUsuario) {

    var instrucaoSql = `SELECT ROUND(AVG(pctAcertos), 1), ROUND(AVG(pctErros), 1) FROM tentativas WHERE fkUsuario = '${idUsuario}'`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarGeral(idUsuario) {

    var instrucaoSql = `SELECT nota FROM tentativas WHERE fkUsuario = '${idUsuario}'`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscar(idUsuario, quiz) {

    var instrucaoSql = `SELECT t.nota FROM tentativas AS t JOIN quiz AS q ON t.fkQuiz = q.idQuiz
    WHERE t.fkUsuario = '${idUsuario}' AND q.nome = '${quiz}'`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPIGeral(idUsuario) {

    var instrucaoSql = `SELECT MAX(nota), MIN(nota) FROM tentativas WHERE fkUsuario = '${idUsuario}'`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPI2(idUsuario) {

    var instrucaoSql = `SELECT q.nome, ROUND(AVG(nota), 1) FROM quiz AS q JOIN tentativas AS t ON q.idQuiz = t.fkQuiz WHERE fkUsuario = '${idUsuario}'
    GROUP BY q.nome`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPI(idUsuario, quiz) {

    var instrucaoSql = `SELECT MAX(nota), MIN(nota) FROM tentativas AS t JOIN quiz AS q ON t.fkQuiz = q.idQuiz
    WHERE t.fkUsuario = '${idUsuario}' AND q.nome = '${quiz}'`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPizza,
    buscarGeral,
    buscar,
    exibirKPIGeral,
    exibirKPI2,
    exibirKPI
}
