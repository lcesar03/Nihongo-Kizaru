var lista_questoes = [
    {
        pergunta: "1. Como se escrevem as palavras cor e cores em kanji?",
        alternativaA: "色-色",
        alternativaB: "色-色達",
        alternativaC: "色達-色",
        alternativaD: "色-いろ",
        alternativaCorreta: "色-色"
    },
    {
        pergunta: "2. Como se escreve a cor あかい em kanji e em português?",
        alternativaA: "青い-vermelho",
        alternativaB: "赤い-azul",
        alternativaC: "赤い-vermelho",
        alternativaD: "青い-azul",
        alternativaCorreta: "赤い-vermelho"
    },
    {
        pergunta: "3. Como se escreve a cor verde em kanji e hiragana?",
        alternativaA: "紫色-むらさきいろ",
        alternativaB: "紫-むらさき",
        alternativaC: "緑-みどり",
        alternativaD: "紫-みどり",
        alternativaCorreta: "緑-みどり"
    },
    {
        pergunta: "4. Como se escrevem as cores laranja e rosa em katakana?",
        alternativaA: "オルンジ-ピンゲ",
        alternativaB: "オレンジ-ピンク",
        alternativaC: "オレンヅ-ピンク",
        alternativaD: "オレンジ-ピンゲ",
        alternativaCorreta: "オレンジ-ピンク"
    },
    {
        pergunta: "5. Como se escreve a cor amarelo como adjetivo em kanji e hiragana?",
        alternativaA: "黄色い-きいろい",
        alternativaB: "黄色-きいろ",
        alternativaC: "きいろ-黄色",
        alternativaD: "黄色い-きろい",
        alternativaCorreta: "黄色い-きいろい"
    },
    {
        pergunta: "6. Como se escreve a cor 青い em hiragana e em português?",
        alternativaA: "あおい-preto",
        alternativaB: "しろい-preto",
        alternativaC: "しろい-roxo",
        alternativaD: "あおい-azul",
        alternativaCorreta: "あおい-azul"
    },
    {
        pergunta: "7. Qual cor tem 色 como sufixo?",
        alternativaA: "青",
        alternativaB: "桃",
        alternativaC: "黒",
        alternativaD: "赤",
        alternativaCorreta: "桃"
    },
    {
        pergunta: "8. Quais as cores da bandeira do Japão?",
        alternativaA: "赤い-黒い",
        alternativaB: "青い-黄色い",
        alternativaC: "赤い-白い",
        alternativaD: "茶色い-灰色",
        alternativaCorreta: "赤い-白い"
    },
    {
        pergunta: "9. Qual o kanji da cor roxo?",
        alternativaA: "紫",
        alternativaB: "灰",
        alternativaC: "桃",
        alternativaD: "緑",
        alternativaCorreta: "紫"
    },
    {
        pergunta: "10. Como se escrevem as cores branco, cinza e preto respectivamente?",
        alternativaA: "白い-灰色い-黒い",
        alternativaB: "白い-黒い-灰色い",
        alternativaC: "灰色い-黒い-白い",
        alternativaD: "白い-灰色-黒い",
        alternativaCorreta: "白い-灰色-黒い"
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
    var idQuiz = 103
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