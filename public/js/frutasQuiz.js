var lista_questoes = [
    {
        pergunta: "1. Como se escreve fruta em kanji?",
        alternativaA: "物果",
        alternativaB: "物束",
        alternativaC: "果物",
        alternativaD: "束物",
        alternativaCorreta: "果物"
    },
    {
        pergunta: "2. Como se escreve limão amarelo e limão verde respectivamente?",
        alternativaA: "レモン-すだち",
        alternativaB: "すだち-ルモン",
        alternativaC: "ルモン-すたち",
        alternativaD: "すたち-レモン",
        alternativaCorreta: "レモン-すだち"
    },
    {
        pergunta: "3. Como se escreve パイナップル em português?",
        alternativaA: "banana",
        alternativaB: "pêssego",
        alternativaC: "abacaxi",
        alternativaD: "cereja",
        alternativaCorreta: "abacaxi"
    },
    {
        pergunta: "4. Como se escreve melancia em japonês?",
        alternativaA: "すいが",
        alternativaB: "すいか",
        alternativaC: "ずいか",
        alternativaD: "ずいが",
        alternativaCorreta: "すいか"
    },
    {
        pergunta: "5. Como se escreve tangerina, pêssego e pera respectivamente?",
        alternativaA: "なし-みかん-もも",
        alternativaB: "もも-なし-みかん",
        alternativaC: "もも-みかん-なし",
        alternativaD: "みかん-もも-なし",
        alternativaCorreta: "みかん-もも-なし"
    },
    {
        pergunta: "6. Como se escreve cereja em japonês?",
        alternativaA: "さくらんぼ",
        alternativaB: "さくらいぼ",
        alternativaC: "さくらぼ",
        alternativaD: "さくらい",
        alternativaCorreta: "さくらんぼ"
    },
    {
        pergunta: "7. Como se escreve いちご em português?",
        alternativaA: "melão",
        alternativaB: "morango",
        alternativaC: "abacaxi",
        alternativaD: "mamão",
        alternativaCorreta: "morango"
    },
    {
        pergunta: "8. Qual fruta é vermelha?",
        alternativaA: "みかん",
        alternativaB: "りんご",
        alternativaC: "すだち",
        alternativaD: "ぶどう",
        alternativaCorreta: "りんご"
    },
    {
        pergunta: "9. Como se escreve banana em japonês?",
        alternativaA: "バナナ",
        alternativaB: "ハササ",
        alternativaC: "パナナ",
        alternativaD: "パササ",
        alternativaCorreta: "バナナ"
    },
    {
        pergunta: "10. Como se escreve uva e maçã em japonês?",
        alternativaA: "ふどう-りんこ",
        alternativaB: "ふどお-りんご",
        alternativaC: "ぶどう-りんご",
        alternativaD: "ぶどお-りんこ",
        alternativaCorreta: "ぶどう-りんご"
    }
]

var i = 0
var pontos = 0
var qtdquestoes = lista_questoes.length
var lista_alternativas = []
var pctAcertos = 0
var pctErros = 0
var idTentativa = 0
var nota = 0

function esconder() {
    document.getElementById('questionario').style.display = "none"
    document.getElementById('textoFinal').style.display = "none"
}

function iniciar() {
    var idQuiz = 105
    var idUsuario = sessionStorage.ID_USUARIO

    document.getElementById('textoInicial').style.display = "none"
    document.getElementById('questionario').style.display = "flex"
    document.getElementById('botaoFin').style.display = "none"

    exibir()

    fetch("/quiz/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioVincularServer: idUsuario,
            idQuizVincularServer: idQuiz
        })

    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.ID_TENTATIVA = json.insertId;
                idTentativa = sessionStorage.ID_TENTATIVA
            });

        }

    }).catch(function (erro) {
        console.log(erro);
    })

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

        var acertos = Number((pontos * 100) / qtdquestoes)
        var erros = Number(100 - acertos)
        pctAcertos = `${acertos}%`
        pctErros = `${erros}%`
        nota = (acertos/10).toFixed(1)

        fetch("/quiz/atualizar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                notaServer: nota,
                pctAcertosServer: pctAcertos,
                pctErrosServer: pctErros,
                idTentativaServer: idTentativa
            })

        }).then(function (resposta) {

            if (resposta.ok) {
                console.log(resposta);
            }

        }).catch(function (erro) {
            console.log(erro);
        })
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