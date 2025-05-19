var database = require("../database/config")

function cadastrar(fkUsuario, fkQuiz) {
    var instrucao = `
        INSERT INTO tentativas (idTentativa, fkUsuario, fkQuiz, dtHoraInicio, dtHoraFim) VALUES (default , '${fkUsuario}','${fkQuiz}', default, null);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar(nota, pctAcertos, pctErros, idTentativa) {
    var instrucao = `
        UPDATE tentativas SET nota = '${nota}' , pctAcertos = '${pctAcertos}', pctErros = '${pctErros}', dtHoraFim = default WHERE idTentativa = '${idTentativa}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    atualizar
};