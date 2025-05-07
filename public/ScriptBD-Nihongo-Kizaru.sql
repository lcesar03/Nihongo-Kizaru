CREATE DATABASE nihongo;

USE nihongo;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(150) NOT NULL,
email VARCHAR(55) NOT NULL,
telefone CHAR(11) NOT NULL,
senha VARCHAR(45) NOT NULL
);

CREATE TABLE quiz(
idQuiz INT PRIMARY KEY auto_increment,
nome VARCHAR(100) NOT NULL,
descricao VARCHAR(200),
qtdPerguntas INT
) auto_increment = 100;

CREATE TABLE tentativas(
idTentativa INT auto_increment,
fkUsuario INT NOT NULL,
fkQuiz INT NOT NULL,
	CONSTRAINT pkComposta PRIMARY KEY (idTentativa, fkUsuario, fkQuiz),
pctAcertos VARCHAR(15),
pctErros VARCHAR(15),
dtHoraInicio DATETIME DEFAULT CURRENT_TIMESTAMP,
dtHoraFim DATETIME DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fkUsuarioTent FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT fkQuizTent FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);