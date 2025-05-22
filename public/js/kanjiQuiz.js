var lista_questoes = [
    {
        pergunta: "1. Como se lê a palavra 水 em hiragana?",
        alternativaA: "いみず",
        alternativaB: "みず",
        alternativaC: "すい",
        alternativaD: "すいず",
        alternativaCorreta: "みず"
    },
    {
        pergunta: "2. Como se escreve 'fogos de artifício' em kanji?",
        alternativaA: "花火",
        alternativaB: "火花",
        alternativaC: "花木",
        alternativaD: "木花",
        alternativaCorreta: "花火"
    },
    {
        pergunta: "3. Como se lê o On'yomi do kanji 木 em katakana?",
        alternativaA: "モケ",
        alternativaB: "モク",
        alternativaC: "ボク",
        alternativaD: "ポケ",
        alternativaCorreta: "モク"
    },
    {
        pergunta: "4. Como se escreve a palavra 'adulto' em kanji?",
        alternativaA: "人大",
        alternativaB: "小人",
        alternativaC: "大人",
        alternativaD: "人小",
        alternativaCorreta: "大人"
    },
    {
        pergunta: "5. Como se lê os Kun'yomi do kanji 火 em hiragana?",
        alternativaA: "ひ-び-ぽ",
        alternativaB: "び-ぴ-ほ",
        alternativaC: "ひ-ぴ-は",
        alternativaD: "ひ-び-ほ",
        alternativaCorreta: "ひ-び-ほ"
    },
    {
        pergunta: "6. Quais kanjis tem On'yomi lido como カ?",
        alternativaA: "火-小",
        alternativaB: "本-小",
        alternativaC: "本-火",
        alternativaD: "花-火",
        alternativaCorreta: "花-火"
    },
    {
        pergunta: "7. Como se escreve 'Japão' e 'japonês' respectivamente?",
        alternativaA: "日本人-本人",
        alternativaB: "本人-本日",
        alternativaC: "日本人-日人本",
        alternativaD: "日本-日本人",
        alternativaCorreta: "日本-日本人"
    },
    {
        pergunta: "8. Qual o oposto da palavra 大きい?",
        alternativaA: "小さい",
        alternativaB: "大さい",
        alternativaC: "小せい",
        alternativaD: "大い",
        alternativaCorreta: "小さい"
    },
    {
        pergunta: "9. Como se lê a palavra 小さい em hiragana e o que significa?",
        alternativaA: "おおさい-lento",
        alternativaB: "ちいさい-pequeno",
        alternativaC: "もとさい-leve",
        alternativaD: "じつさい-lento",
        alternativaCorreta: "ちいさい-pequeno"
    },
    {
        pergunta: "10. O que significa o kanji 日 e como se lê os On'yomi em katakana?",
        alternativaA: "dia-Sol-Japão-ニチ-ジツ",
        alternativaB: "noite-Sol-japonês-みチ-ヅシ",
        alternativaC: "dia-lua-japonês-みチ-ヅシ",
        alternativaD: "dia-lua-Japão-ニチ-ヅシ",
        alternativaCorreta: "dia-Sol-Japão-ニチ-ジツ"
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
    var idQuiz = 102
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