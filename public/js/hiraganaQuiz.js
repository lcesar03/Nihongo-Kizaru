var lista_questoes = [
    {
        pergunta: "1. Como se escreve a letra A em hiragana?",
        alternativaA: "じ",
        alternativaB: "あ",
        alternativaC: "ま",
        alternativaD: "る",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "2. Como se escreve a letra つ em rōmaji?",
        alternativaA: "Gi",
        alternativaB: "No",
        alternativaC: "Ya",
        alternativaD: "Tsu",
        alternativaCorreta: "alternativaD"
    },
    {
        pergunta: "3. Como se escreve a letra Be em hiragana?",
        alternativaA: "よ",
        alternativaB: "た",
        alternativaC: "べ",
        alternativaD: "に",
        alternativaCorreta: "alternativaC"
    },
    {
        pergunta: "4. Como se escreve a letra み em rōmaji?",
        alternativaA: "Mi",
        alternativaB: "Nu",
        alternativaC: "Ga",
        alternativaD: "Se",
        alternativaCorreta: "alternativaA"
    },
    {
        pergunta: "5. Como se escreve a sequência Chi-Ra-N-E-Bo em hiragana?",
        alternativaA: "ち-ら-ぼ-え-ん",
        alternativaB: "ら-ち-ん-え-ぼ",
        alternativaC: "ら-ん-え-ぼ-ち",
        alternativaD: "ち-ら-ん-え-ぼ",
        alternativaCorreta: "alternativaD"
    },
    {
        pergunta: "6. Como se escreve a sequência て-ろ-も-き-な em rōmaji?",
        alternativaA: "Ro-Ki-Mo-Na-Te",
        alternativaB: "Ro-Mo-Ki-Na-Te",
        alternativaC: "Ro-Te-Mo-Ki-Na",
        alternativaD: "Te-Ro-Mo-Ki-Na",
        alternativaCorreta: "alternativaD"
    },
    {
        pergunta: "7. Como se escreve a letra Ha com handakuten em hiragana?",
        alternativaA: "ぱ",
        alternativaB: "び",
        alternativaC: "ば",
        alternativaD: "ぴ",
        alternativaCorreta: "alternativaA"
    },
    {
        pergunta: "8. Como se escreve a letra Se com dakuten em hiragana?",
        alternativaA: "ぜ",
        alternativaB: "ど",
        alternativaC: "ぞ",
        alternativaD: "ぺ",
        alternativaCorreta: "alternativaA"
    },
    {
        pergunta: "9. Como se escreve a palavra せんせい em rōmaji?",
        alternativaA: "Sansai",
        alternativaB: "Sensei",
        alternativaC: "Saisai",
        alternativaD: "Sonsoi",
        alternativaCorreta: "alternativaB"
    },
    {
        pergunta: "10. Como se escreve a coluna do Zagyou em hiragana?",
        alternativaA: "ざ-じ-づ-ぞ-ぜ",
        alternativaB: "ざ-ぢ-ず-ぜ-ぞ",
        alternativaC: "ざ-じ-ず-ぜ-ぞ",
        alternativaD: "ざ-ぢ-づ-ぞ-ぜ",
        alternativaCorreta: "alternativaC"
    }
]

var i = 0

function esconder() {
    document.getElementById('questionario').style.display = "none"
}

function iniciar() {
    document.getElementById('textoInicial').style.display = "none"
    document.getElementById('botaoIniciar').style.display = "none"
    document.getElementById('questionario').style.display = "flex"
    document.getElementById('botaoFin').style.display = "none"
    document.getElementById('botaoVol').style.display = "none"

    exibir()

}

function exibir() {
    var questao_atual = lista_questoes[i]

    document.getElementById("questao_atual").innerHTML = questao_atual.pergunta;
    document.getElementById("labelA").innerHTML = questao_atual.alternativaA;
    document.getElementById("labelB").innerHTML = questao_atual.alternativaB;
    document.getElementById("labelC").innerHTML = questao_atual.alternativaC;
    document.getElementById("labelD").innerHTML = questao_atual.alternativaD;

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

        limpar()

        if (i < lista_questoes.length - 2) {
            i++
            exibir()

        } else if(i == lista_questoes.length - 2){
            i++
            document.getElementById('botaoAva').style.display = "none"
            document.getElementById('botaoFin').style.display = "flex"
            exibir()
        
        }
    }
}

function finalizar(){

}

function limpar() {
    var escolhas = document.getElementsByName("escolha");
    for (var i2 = 0; i2 < escolhas.length; i2++) {
        escolhas[i2].checked = false;
    }
}