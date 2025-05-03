var tentativas = 10
var tentativa_base = 0
var dica = 0
resultado_mensagem.innerHTML = ''
var mensagem2 = ''
var mensagem3 = ''
var desconto = 0

function adivinhar() {
    var palpite = input_palpite.value
    premio = Number(premio)

    if (max <= 20 && tentativas == 10) {
        tentativas = 3
        tentativa_base = 3
    } else if (max <= 50 && tentativas == 10) {
        tentativas = 5
        tentativa_base = 5
    } else if (max <= 100 && tentativas == 10) {
        tentativas = 7
        tentativa_base = 7
    }

    if (tentativas > 0) {

        if (lista_palpite.includes(palpite)) {
            for (var i = 1; i <= lista_palpite.length; i++) {
                var romaji_atual = lista_palpite[i]

                if (palpite == romaji_atual) {
                    romaji_atual = lista_numero[i]

                    if (sorteado == romaji_atual) {
                        mensagem3 = `おめでとう! Você adivinhou o número da loteria!<br>
                        Você ganhou ${premio.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })}<br>`
                        shoubu_mensagem1.innerHTML = `勝利`

                    } else {
                        desconto = Math.round((max / tentativa_base) * 10000)
                        tentativas = tentativas - 1
                        premio = Number(premio - desconto)*1.05
                        dica++
                        if (tentativas > 0 && romaji_atual < sorteado) {
                            romaji_atual = lista_kanji2[i]
                            mensagem3 = `Quase! Você ainda tem: ${tentativas} tentativa(s) <br>`
                            mensagem2+= `${dica}ª dica - O número sorteado é maior que ${romaji_atual} <br>
                            `
                            premio_mensagem.innerHTML = `${premio.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })}`

                        } else if (tentativas > 0 && romaji_atual > sorteado) {
                            romaji_atual = lista_kanji2[i]
                            mensagem3 = `Quase! Você ainda tem: ${tentativas} tentativa(s) <br>`
                            mensagem2+= `${dica}ª dica - O número sorteado é menor que ${romaji_atual} <br>
                            `
                            premio_mensagem.innerHTML = `${premio.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })}`

                        } else {
                            mensagem2 += `
                            Parece que não foi dessa vez...
                            `
                            mensagem3 = `残念! Você tem 0 tentativa(s)<br>`
                            shoubu_mensagem2.innerHTML=`敗北`
                            premio_mensagem.innerHTML = 0
                            lista_numero = ['',]
                            lista_kanji2 = ['',]
                            lista_palpite = ['',]
                        }

                    }

                    i > lista_palpite.length
                }
            }

        } else {
            alert('Palavra inválida! Verifique se você escreveu corretamente')
        }

        resultado_mensagem.innerHTML = mensagem3 + mensagem2
    }
}