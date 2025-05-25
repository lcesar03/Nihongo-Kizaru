var lista_questoes = [
    {
        pergunta: "1. Como se lê o kanji 動物 em hiragana?",
        alternativaA: "どうふつ",
        alternativaB: "とうぶつ",
        alternativaC: "どうぶつ",
        alternativaD: "どおぶつ",
        alternativaCorreta: "どうぶつ"
    },
    {
        pergunta: "2. Como se escreve cachorro em kanji e hiragana?",
        alternativaA: "犬-いぬ",
        alternativaB: "鳥-とり",
        alternativaC: "魚-さかな",
        alternativaD: "兎-うさぎ",
        alternativaCorreta: "犬-いぬ"
    },
    {
        pergunta: "3. Como se escreve 狐 em hiragana e português?",
        alternativaA: "きつね-raposa",
        alternativaB: "きつめ-tigre",
        alternativaC: "きつめ-raposa",
        alternativaD: "きつね-tigre",
        alternativaCorreta: "きつね-raposa"
    },
    {
        pergunta: "4. Qual animal vive na água?",
        alternativaA: "兎",
        alternativaB: "魚",
        alternativaC: "熊",
        alternativaD: "鹿",
        alternativaCorreta: "魚"
    },
    {
        pergunta: "5. Como se escreve かえる em kanji e português?",
        alternativaA: "鹿-cervo",
        alternativaB: "狼-lobo",
        alternativaC: "馬-cavalo",
        alternativaD: "蛙-sapo",
        alternativaCorreta: "蛙-sapo"
    },
    {
        pergunta: "6. Como se escreve panda e urso em japonês?",
        alternativaA: "パソダ-兎",
        alternativaB: "パソダ-熊",
        alternativaC: "パンダ-熊",
        alternativaD: "パンダ-兎",
        alternativaCorreta: "パンダ-熊"
    },
    {
        pergunta: "7. Como se escreve 馬 em hiragana?",
        alternativaA: "うま",
        alternativaB: "くな",
        alternativaC: "うな",
        alternativaD: "ぐま",
        alternativaCorreta: "うま"
    },
    {
        pergunta: "8. Como se escreve galinha e galo em japonês?",
        alternativaA: "鶏-鹿",
        alternativaB: "鶏-鶏",
        alternativaC: "鶏-猿",
        alternativaD: "鶏-猫",
        alternativaCorreta: "鶏-鶏"
    },
    {
        pergunta: "9. Como se escreve pássaro, lobo e coelho respectivamente?",
        alternativaA: "兎-狼-鳥",
        alternativaB: "狼-鳥-兎",
        alternativaC: "兎-鳥-狼",
        alternativaD: "鳥-狼-兎",
        alternativaCorreta: "鳥-狼-兎"
    },
    {
        pergunta: "10. Qual desses animais é doméstico?",
        alternativaA: "狐",
        alternativaB: "熊",
        alternativaC: "猫",
        alternativaD: "鹿",
        alternativaCorreta: "猫"
    },
    {
        pergunta: "11. Como se escreve cervo em kanji e hiragana?",
        alternativaA: "鹿-しか",
        alternativaB: "鶏-しが",
        alternativaC: "鹿-しば",
        alternativaD: "鶏-しば",
        alternativaCorreta: "鹿-しか"
    },
    {
        pergunta: "12. Qual desses animais possui um casco?",
        alternativaA: "兎",
        alternativaB: "亀",
        alternativaC: "狼",
        alternativaD: "蛙",
        alternativaCorreta: "亀"
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
    var idQuiz = 104
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
        } else if (pontos <= 7) {
            document.getElementById('spanResultado').innerHTML = `残念... <br>
            Sugiro refazer a lista de exercícios. `
        } else if (pontos <= 9) {
            document.getElementById('spanResultado').innerHTML = `いいね! <br>
            Está indo bem! Continue os estudos para melhorar.`
        } else if (pontos <= 11) {
            document.getElementById('spanResultado').innerHTML = `すごい! <br>
            Você se esforçou mesmo! Parece que fixou bem o conteúdo.`
        } else {
            document.getElementById('spanResultado').innerHTML = `え?満点を取った?!😲 <br>
            PARABÉNS!!! Você atingiu a nota máxima!`
        }

        var acertos = (Number((pontos * 100) / qtdquestoes)).toFixed(1)
        var erros = (Number(100 - acertos)).toFixed(1)
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