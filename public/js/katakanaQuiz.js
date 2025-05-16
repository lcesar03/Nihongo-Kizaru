var lista_questoes = [
    {
        pergunta: "1. Como se escreve a letra Nu em katakana?",
        alternativaA: "チ",
        alternativaB: "エ",
        alternativaC: "ヌ",
        alternativaD: "モ",
        alternativaCorreta: "ヌ"
    },
    {
        pergunta: "2. Como se escreve a letra テ em rōmaji?",
        alternativaA: "Te",
        alternativaB: "Ba",
        alternativaC: "Yo",
        alternativaD: "Mi",
        alternativaCorreta: "Te"
    },
    {
        pergunta: "3. Como se escreve a letra Shi em katakana?",
        alternativaA: "ン",
        alternativaB: "ツ",
        alternativaC: "シ",
        alternativaD: "ソ",
        alternativaCorreta: "シ"
    },
    {
        pergunta: "4. Como se escreve a palavra hotel em katakana?",
        alternativaA: "ホテレ",
        alternativaB: "ホテル",
        alternativaC: "ボテル",
        alternativaD: "ポテレ",
        alternativaCorreta: "ホテル"
    },
    {
        pergunta: "5. Como se escreve a sequência Ne-Wo-O-Me-Ga em katakana?",
        alternativaA: "ミ-オ-ヲ-ノ-ガ",
        alternativaB: "ミ-ヲ-オ-ノ-カ",
        alternativaC: "ロ-オ-ヲ-ネ-カ",
        alternativaD: "ネ-ヲ-オ-メ-ガ",
        alternativaCorreta: "ネ-ヲ-オ-メ-ガ"
    },
    {
        pergunta: "6. Como se escreve a sequência ヂ-コ-ブ-ス-イ em rōmaji?",
        alternativaA: "Ji-Ko-Bu-Su-I",
        alternativaB: "Chi-Go-Pu-Su-E",
        alternativaC: "Chi-Ko-Pu-Se-I",
        alternativaD: "Ji-Go-Pu-Se-I",
        alternativaCorreta: "Ji-Ko-Bu-Su-I"
    },
    {
        pergunta: "7. Como se escreve a letra Hi com handakuten em katakana?",
        alternativaA: "バ",
        alternativaB: "ビ",
        alternativaC: "パ",
        alternativaD: "ピ",
        alternativaCorreta: "ピ"
    },
    {
        pergunta: "8. Como se escreve a letra Ku com dakuten em katakana?",
        alternativaA: "ゲ",
        alternativaB: "グ",
        alternativaC: "ペ",
        alternativaD: "ザ",
        alternativaCorreta: "グ"
    },
    {
        pergunta: "9. Como se escrevem as palavras vidro e rádio em katakana?",
        alternativaA: "ガワス-フジオ",
        alternativaB: "ガラス-ラヅオ",
        alternativaC: "ガラス-ラジオ",
        alternativaD: "ガフス-ラヅオ",
        alternativaCorreta: "ガラス-ラジオ"
    },
    {
        pergunta: "10. Como se escreve a coluna do Dagyou em katakana?",
        alternativaA: "グ-ヂ-ジ-ド-デ",
        alternativaB: "ダ-ヂ-ヅ-デ-ド",
        alternativaC: "グ-ヂ-ジ-デ-ド",
        alternativaD: "ダ-ヂ-ゾ-ド-デ",
        alternativaCorreta: "ダ-ヂ-ヅ-デ-ド"
    }
]

var i = 0
var pontos = 0
var qtdquestoes = lista_questoes.length
var lista_alternativas = []

function esconder() {
    document.getElementById('questionario').style.display = "none"
    document.getElementById('textoFinal').style.display = "none"
}

function iniciar() {
    document.getElementById('textoInicial').style.display = "none"
    document.getElementById('questionario').style.display = "flex"
    document.getElementById('botaoFin').style.display = "none"

    exibir()

}

function exibir() {
    var questao_atual = lista_questoes[i]
    lista_alternativas = []
    document.getElementById("questao_atual").innerHTML = questao_atual.pergunta;
    var alternativaA = document.getElementById("labelA").innerHTML = questao_atual.alternativaA;
    var alternativaB = document.getElementById("labelB").innerHTML = questao_atual.alternativaB;
    var alternativaC = document.getElementById("labelC").innerHTML = questao_atual.alternativaC;
    var alternativaD = document.getElementById("labelD").innerHTML = questao_atual.alternativaD;
    lista_alternativas.push(alternativaA, alternativaB, alternativaC, alternativaD)

}

function avançar() {
    var escolhas = document.getElementsByName("escolha")
    var verificado = false

    for (var i2 = 0; i2 < escolhas.length; i2++) {
        if (escolhas[i2].checked) {
            verificado = true
            break
        }
    }

    if (verificado == false) {
        erro_mensagem.innerHTML = `<b>Nenhuma alternativa selecionada.</b><br><br> Por favor, escolha uma opção!`
        document.getElementById("caixa_erro").style.backgroundColor = "rgb(39, 39, 39)"

        setTimeout(() => {
            erro_mensagem.innerHTML = ``
            document.getElementById("caixa_erro").style.backgroundColor = ""
        }, 4000)

    } else {

        if (i < lista_questoes.length - 2) {
            analisar()
            limpar()
            i++
            exibir()

        } else if (i == lista_questoes.length - 2) {
            analisar()
            limpar()
            i++
            document.getElementById('botaoAva').style.display = "none"
            document.getElementById('botaoFin').style.display = "flex"
            exibir()

        }
    }
}

function finalizar() {
    var escolhas = document.getElementsByName("escolha")
    var verificado = false

    for (var i2 = 0; i2 < escolhas.length; i2++) {
        if (escolhas[i2].checked) {
            verificado = true
            break
        }
    }

    if (verificado == false) {
        erro_mensagem.innerHTML = `<b>Nenhuma alternativa selecionada.</b><br><br> Por favor, escolha uma opção!`
        document.getElementById("caixa_erro").style.backgroundColor = "rgb(39, 39, 39)"

        setTimeout(() => {
            erro_mensagem.innerHTML = ``
            document.getElementById("caixa_erro").style.backgroundColor = ""
        }, 4000)

    } else {
        analisar()
        document.getElementById('questionario').style.display = "none"
        document.getElementById('textoFinal').style.display = "flex"
        document.getElementById('spanPontos').innerHTML = `${pontos}/${qtdquestoes}`

        if (pontos == 0) {
            document.getElementById('spanResultado').innerHTML = `ちょっとお前!頭が悪いのかコラ!👺 <br>
            Parece que você não leu o conteúdo...`
        } else if (pontos <= 5) {
            document.getElementById('spanResultado').innerHTML = `残念... <br>
            Sugiro refazer a lista de exercícios. `
        } else if (pontos <= 7) {
            document.getElementById('spanResultado').innerHTML = `いいね! <br>
            Está indo bem! Continue os estudos para melhorar.`
        } else if (pontos <= 9) {
            document.getElementById('spanResultado').innerHTML = `すごい! <br>
            Você se esforçou mesmo! Parece que fixou bem o conteúdo.`
        } else {
            document.getElementById('spanResultado').innerHTML = `え?満点を取った?!😲 <br>
            PARABÉNS!!! Você atingiu a nota máxima!`
        }

    }

}

function voltar() {
   window.location.reload()
}

function limpar() {
    var escolhas = document.getElementsByName("escolha");
    for (var i2 = 0; i2 < escolhas.length; i2++) {
        escolhas[i2].checked = false;
    }
}

function analisar() {
    var resposta_correta = lista_questoes[i].alternativaCorreta
    var escolhas = document.getElementsByName("escolha")
    var resposta_atual = 0

    for (var i2 = 0; i2 < escolhas.length; i2++) {
        if (escolhas[i2].checked) {
            resposta_atual = lista_alternativas[i2]
            break
        }
    }

    if (resposta_atual == resposta_correta) {
        pontos++
    }

}