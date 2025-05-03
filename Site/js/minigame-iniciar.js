premio_mensagem.innerHTML = 0
var lista_kanji = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九']
var lista_romaji = ['', 'ichi', 'ni', 'san', 'yon', 'go', 'roku', 'nana', 'hachi', 'kyuu']
var lista_numero = ['',]  
var lista_palpite = ['',] 
var lista_kanji2 = ['',] 
var min = 1
var max = 0
var intervalo = 0
var sorteado = 0
var numero_atual = 0
var premio = 0

function iniciar() {
    max = Number(input_max.value)
    intervalo = max - min
    sorteado = parseInt((Math.random()) * (intervalo + 1) + min)
    premio = Number(max * 10000)
    var mensagem = ''
    premio_mensagem.innerHTML = premio.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })

    if (max > 100 || max < 10) {
        alert('Valor máximo deve ser de 10 até 100!')

    } else {
        for (var contador = min; contador <= max; contador++) {
            lista_numero.push((contador).toString())
        }

        for (var i = 1; i <= max; i++) {
            numero_atual = lista_numero[i]

            if (numero_atual.length == 1) {

                for (var i2 = 1; i2 <= max; i2++) {
                    if (numero_atual == i2) {
                        mensagem += `${numero_atual} ${lista_kanji[i2]} ${lista_romaji[i2]}<br><br>`
                        lista_palpite.push(lista_romaji[i2])
                        lista_kanji2.push(lista_kanji[i2])
                        i2 > max
                    }
                }

            } else if (numero_atual.length == 2) {

                if (numero_atual == 10) {
                    mensagem += `10 十 juu <br><br>`
                    lista_palpite.push('juu')
                    lista_kanji2.push('十')
                } else if (numero_atual == 20) {
                    mensagem += `20 二十 ni juu <br><br>`
                    lista_palpite.push('ni juu')
                    lista_kanji2.push('二十')
                } else if (numero_atual == 30) {
                    mensagem += `30 三十 san juu <br><br>`
                    lista_palpite.push('san juu')
                    lista_kanji2.push('三十')
                } else if (numero_atual == 40) {
                    mensagem += `40 四十 yon juu <br><br>`
                    lista_palpite.push('yon juu')
                    lista_kanji2.push('四十')
                } else if (numero_atual == 50) {
                    mensagem += `50 五十 go juu <br><br>`
                    lista_palpite.push('go juu')
                    lista_kanji2.push('五十')
                } else if (numero_atual == 60) {
                    mensagem += `60 六十 roku juu <br><br>`
                    lista_palpite.push('roku juu')
                    lista_kanji2.push('六十')
                } else if (numero_atual == 70) {
                    mensagem += `70 七十 nana juu <br><br>`
                    lista_palpite.push('nana juu')
                    lista_kanji2.push('七十')
                } else if (numero_atual == 80) {
                    mensagem += `80 八十 hachi juu <br><br>`
                    lista_palpite.push('hachi juu')
                    lista_kanji2.push('八十')
                } else if (numero_atual == 90) {
                    mensagem += `90 九十 kyuu juu <br><br>`
                    lista_palpite.push('kyuu juu')
                    lista_kanji2.push('九十')
                } else {
                    for (var i3 = 1; i3 <= max; i3++) {

                        if (numero_atual[0] == i3 && i3 == 1) {

                            for (var i4 = 1; i4 <= max; i4++) {

                                if (numero_atual[1] == i4) {
                                    mensagem += `${numero_atual} 十${lista_kanji[i4]} juu ${lista_romaji[i4]}<br><br>`
                                    i4 > max
                                    lista_palpite.push(`juu ${lista_romaji[i4]}`)
                                    lista_kanji2.push(`十${lista_kanji[i4]}`)
                                }
                            }

                            i3 > max

                        } else if (numero_atual[0] == i3) {

                            for (var i5 = 1; i5 <= max; i5++) {

                                if (numero_atual[1] == i5) {
                                    mensagem += `${numero_atual} 
                                    ${lista_kanji[i3]}十${lista_kanji[i5]} 
                                    ${lista_romaji[i3]} juu ${lista_romaji[i5]}<br><br>
                                    `
                                    lista_palpite.push(`${lista_romaji[i3]} juu ${lista_romaji[i5]}`)
                                    lista_kanji2.push(`${lista_kanji[i3]}十${lista_kanji[i5]}`)
                                    i5 > max
                                }
                            }

                            i3 > max

                        }
                    }
                }

            } else {
                mensagem += `100 百 hyaku`
                lista_palpite.push('hyaku')
            }

        }

    }
    kanji_mensagem.innerHTML = mensagem
    resultado_mensagem.innerHTML = ''
    shoubu_mensagem1.innerHTML = ''
    shoubu_mensagem2.innerHTML = ''
    mensagem2 = ''
    mensagem3=''
    tentativas = 10
    dica = 0
}