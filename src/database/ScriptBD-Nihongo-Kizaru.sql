CREATE DATABASE nihongo;

USE nihongo;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY auto_increment,
nome VARCHAR(150) NOT NULL,
email VARCHAR(55) UNIQUE NOT NULL,
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
nota DECIMAL(3,1),
pctAcertos VARCHAR(15),
pctErros VARCHAR(15),
dtHoraInicio DATETIME DEFAULT CURRENT_TIMESTAMP,
dtHoraFim DATETIME DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fkUsuarioTent FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT fkQuizTent FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

INSERT INTO usuario VALUES
(default, 'César', 'lcesar@email.com', '11938447857', 'BATATAS.');

INSERT INTO quiz VALUES
(default, 'Hiragana', 'Questionário sobre o alfabeto hiragana', 10),
(default, 'Katakana', 'Questionário sobre o alfabeto katakana', 10),
(default, 'Kanji', 'Questionário sobre o alfabeto Kanji', 10),
(default, 'Cores', 'Questionário sobre cores em japonês', 10),
(default, 'Animais', 'Questionário sobre animais em japonês', 12),
(default, 'Frutas', 'Questionário sobre frutas em japonês', 10);

INSERT INTO tentativas VALUES
(default, 1, 100, 3.0, '30%', '70%', default, default),
(default, 1, 100, 7.0, '70%', '30%', default, default),
(default, 1, 101, 5.0, '50%', '50%', default, default),
(default, 1, 101, 6.0, '60%', '40%', default, default),
(default, 1, 100, 6.0, '60%', '40%', default, default),
(default, 1, 100, 8.0, '80%', '20%', default, default),
(default, 1, 101, 6.0, '60%', '40%', default, default),
(default, 1, 101, 9.0, '90%', '10%', default, default),
(default, 1, 102, 1.0, '10%', '90%', default, default),
(default, 1, 102, 3.0, '30%', '70%', default, default),
(default, 1, 102, 5.0, '50%', '50%', default, default),
(default, 1, 102, 6.0, '60%', '40%', default, default),
(default, 1, 103, 6.0, '60%', '40%', default, default),
(default, 1, 103, 8.0, '80%', '20%', default, default),
(default, 1, 103, 7.0, '70%', '30%', default, default),
(default, 1, 103, 8.0, '80%', '20%', default, default),
(default, 1, 104, 4.9, '50%', '50%', default, default),
(default, 1, 104, 6.6, '66.6%', '33.4%', default, default),
(default, 1, 104, 6.6, '66.6%', '33.4%', default, default),
(default, 1, 104, 8.3, '83.3%', '16.7%', default, default),
(default, 1, 105, 6.0, '60%', '40%', default, default),
(default, 1, 105, 8.0, '80%', '20%', default, default),
(default, 1, 105, 8.0, '80%', '20%', default, default),
(default, 1, 105, 10.0, '100%', '0%', default, default);

SELECT * FROM tentativas;