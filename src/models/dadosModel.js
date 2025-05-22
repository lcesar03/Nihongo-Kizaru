var database = require("../database/config");

function buscarPizza(idUsuario) {

    var instrucaoSql = `SELECT ROUND(AVG(pctAcertos), 1), ROUND(AVG(pctErros), 1) FROM tentativas WHERE fkUsuario = '${idUsuario}'`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscar(idUsuario) {

    var instrucaoSql = `SELECT nota FROM tentativas WHERE fkUsuario = '${idUsuario}'`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHiragana(idUsuario) {

    var instrucaoSql = `SELECT nota FROM tentativas WHERE fkUsuario = '${idUsuario}' AND fkQuiz = 100`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKatakana(idUsuario) {

    var instrucaoSql = `SELECT nota FROM tentativas WHERE fkUsuario = '${idUsuario}' AND fkQuiz = 101`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKanji(idUsuario) {

    var instrucaoSql = `SELECT nota FROM tentativas WHERE fkUsuario = '${idUsuario}' AND fkQuiz = 102`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPI(idUsuario) {

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

function exibirKPIHiragana(idUsuario) {

    var instrucaoSql = `SELECT MAX(nota), MIN(nota) FROM tentativas WHERE fkUsuario = '${idUsuario}' AND fkQuiz = 100`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPIKatakana(idUsuario) {

    var instrucaoSql = `SELECT MAX(nota), MIN(nota) FROM tentativas WHERE fkUsuario = '${idUsuario}' AND fkQuiz = 101`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPIKanji(idUsuario) {

    var instrucaoSql = `SELECT MAX(nota), MIN(nota) FROM tentativas WHERE fkUsuario = '${idUsuario}' AND fkQuiz = 102`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
