var lista_questoes = [
    {
        pergunta: "1. Como se escreve a letra A em hiragana?",
        alternativaA: "じ",
        alternativaB: "あ",
        alternativaC: "ま",
        alternativaD: "る",
        alternativaCorreta: "あ"
    },
    {
        pergunta: "2. Como se escreve a letra つ em rōmaji?",
        alternativaA: "Gi",
        alternativaB: "No",
        alternativaC: "Ya",
        alternativaD: "Tsu",
        alternativaCorreta: "Tsu"
    },
    {
        pergunta: "3. Como se escreve a letra Be em hiragana?",
        alternativaA: "よ",
        alternativaB: "た",
        alternativaC: "べ",
        alternativaD: "に",
        alternativaCorreta: "べ"
    },
    {
        pergunta: "4. Como se escreve a letra み em rōmaji?",
        alternativaA: "Mi",
        alternativaB: "Nu",
        alternativaC: "Ga",
        alternativaD: "Se",
        alternativaCorreta: "Mi"
    },
    {
        pergunta: "5. Como se escreve a sequência Chi-Ra-N-E-Bo em hiragana?",
        alternativaA: "ち-ら-ぼ-え-ん",
        alternativaB: "ら-ち-ん-え-ぼ",
        alternativaC: "ら-ん-え-ぼ-ち",
        alternativaD: "ち-ら-ん-え-ぼ",
        alternativaCorreta: "ち-ら-ん-え-ぼ"
    },
    {
        pergunta: "6. Como se escreve a sequência て-ろ-も-き-な em rōmaji?",
        alternativaA: "Ro-Ki-Mo-Na-Te",
        alternativaB: "Ro-Mo-Ki-Na-Te",
        alternativaC: "Ro-Te-Mo-Ki-Na",
        alternativaD: "Te-Ro-Mo-Ki-Na",
        alternativaCorreta: "Te-Ro-Mo-Ki-Na"
    },
    {
        pergunta: "7. Como se escreve a letra Ha com handakuten em hiragana?",
        alternativaA: "ぱ",
        alternativaB: "び",
        alternativaC: "ば",
        alternativaD: "ぴ",
        alternativaCorreta: "ぱ"
    },
    {
        pergunta: "8. Como se escreve a letra Se com dakuten em hiragana?",
        alternativaA: "ぜ",
        alternativaB: "ど",
        alternativaC: "ぞ",
        alternativaD: "ぺ",
        alternativaCorreta: "ぜ"
    },
    {
        pergunta: "9. Como se escreve a palavra せんせい em rōmaji?",
        alternativaA: "Sansai",
        alternativaB: "Sensei",
        alternativaC: "Saisai",
        alternativaD: "Sonsoi",
        alternativaCorreta: "Sensei"
    },
    {
        pergunta: "10. Como se escreve a coluna do Zagyou em hiragana?",
        alternativaA: "ざ-じ-づ-ぞ-ぜ",
        alternativaB: "ざ-ぢ-ず-ぜ-ぞ",
        alternativaC: "ざ-じ-ず-ぜ-ぞ",
        alternativaD: "ざ-ぢ-づ-ぞ-ぜ",
        alternativaCorreta: "ざ-じ-ず-ぜ-ぞ"
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