var idUsuario = sessionStorage.ID_USUARIO
var myChart = 0

function obterDadosGrafico(idUsuario) {
    idUsuario = sessionStorage.ID_USUARIO
    var quiz = select_quiz.value

    if (quiz == 'geral') {

        document.getElementById('graficoNota').remove();
        document.getElementById('graficoPai').innerHTML = '<h3>Histórico de Notas por Tentativa</h3> <canvas id="graficoNota"></canvas>';

        fetch(`/dados/buscarGeral/${idUsuario}`, { cache: 'no-store' })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                        plotarGrafico(resposta, idUsuario);

                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            }
            );

    } else {

        document.getElementById('graficoNota').remove();
        document.getElementById('graficoPai').innerHTML = '<h3>Histórico de Notas por Tentativa</h3> <canvas id="graficoNota"></canvas>';

        fetch(`/dados/buscar/${idUsuario}/${quiz}`, { cache: 'no-store' })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                        plotarGrafico(resposta, idUsuario);

                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            }
            );

    }

    fetch(`/dados/buscarPizza/${idUsuario}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    plotarGraficoPizza(resposta, idUsuario);

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );

    exibirKPI()

}

function plotarGrafico(resposta, idUsuario) {
    console.log(resposta)
    console.log(idUsuario)

    console.log('iniciando plotagem do gráfico...');

    var labels = [];
    var lista_indice = [];

    var dados = {

        labels: labels,
        datasets: [{
            label: 'Notas',
            data: [],
            fill: false,
            borderColor: '#880000',
            backgroundColor: '#880000',
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    if (resposta.length > 7) {

        for (var i = resposta.length; i > (resposta.length - 7); i--) {
            lista_indice.push(i)
        }
        lista_indice.reverse()
        console.log(lista_indice)

        for (var i2 = 0; i2 < resposta.length; i2++) {

            for (var i3 = 0; labels.length < 7; i3++) {

                if (lista_indice[i2] == i3) {
                    var registro = resposta[i3 - 1];
                    labels.push(`${i3}° tentativa`);
                    dados.datasets[0].data.push(registro.nota);

                    break
                }
            }
        }

    } else {

        for (i = 0; i < resposta.length; i++) {
            var registro = resposta[i];
            labels.push(`${i + 1}° tentativa`);
            dados.datasets[0].data.push(registro.nota);
        }
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    const config = {
        type: 'line',
        data: dados,
    };

    myChart = new Chart(
        document.getElementById(`graficoNota`),
        config
    );
}

function plotarGraficoPizza(resposta, idUsuario) {
    console.log(resposta)
    console.log(idUsuario)

    console.log('iniciando plotagem do gráfico...');
    var pctAcertos = resposta[0]['ROUND(AVG(pctAcertos), 1)']
    var pctErros = resposta[0]['ROUND(AVG(pctErros), 1)']

    var dados = {
        labels: ['Acertos', 'Erros'],
        datasets: [{
            label: 'Acertos',
            data: [],
            borderColor: ['#ffd900cb', '#880000'],
            backgroundColor: ['#ffd900cb', '#880000'],
            hoverOffset: 15
        }]
    };

    dados.datasets[0].data.push(pctAcertos);
    dados.datasets[0].data.push(pctErros);
    document.getElementById('porcentagemErros').innerHTML = `${pctErros}%`
    document.getElementById('porcentagemAcertos').innerHTML = `${pctAcertos}%`

    const config = {
        type: 'pie',
        data: dados,
    };

    myChart = new Chart(
        document.getElementById(`graficoPizza`),
        config
    );
}

function exibirKPI() {
    idUsuario = sessionStorage.ID_USUARIO
    var quiz = select_quiz.value
    var maior = 0
    var menor = 10

    if (quiz == 'geral') {

        fetch(`/dados/exibirKPIGeral/${idUsuario}`, { cache: 'no-store' })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                        document.getElementById('maiorNota').innerHTML = resposta[0]["MAX(nota)"]
                        document.getElementById('menorNota').innerHTML = resposta[0]["MIN(nota)"]

                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            }
            );

    } else {

        fetch(`/dados/exibirKPI/${idUsuario}/${quiz}`, { cache: 'no-store' })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                        document.getElementById('maiorNota').innerHTML = resposta[0]["MAX(nota)"]
                        document.getElementById('menorNota').innerHTML = resposta[0]["MIN(nota)"]

                    });
                } else {
                    console.error('Nenhum dado encontrado ou erro na API');
                }
            })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            }
            );

    }

    fetch(`/dados/exibirKPI2/${idUsuario}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    for (var i = 0; i < resposta.length; i++) {
                        var resposta_atual = Number(resposta[i]['ROUND(AVG(nota), 1)'])

                        if (resposta_atual > maior) {
                            maior = resposta_atual
                        }

                        if (resposta_atual < menor) {
                            menor = resposta_atual
                        }
                    }

                    if (maior < 6) {
                        document.getElementById('quizFacil').innerHTML = 'Nenhum'
                    } 
                    if(maior >= 6) {
                        for (var i2 = 0; i2 < resposta.length; i2++) {
                            var resposta_atual = Number(resposta[i2]['ROUND(AVG(nota), 1)'])

                            if (resposta_atual == maior) {
                                maior = resposta[i2]['nome']
                            }
                        }
                        document.getElementById('quizFacil').innerHTML = maior
                    }
                    if (menor > 6) {
                        document.getElementById('quizDificil').innerHTML = 'Nenhum'
                    }
                    if (menor <= 6) {
                        for (var i2 = 0; i2 < resposta.length; i2++) {
                            var resposta_atual = Number(resposta[i2]['ROUND(AVG(nota), 1)'])

                            if (resposta_atual == menor) {
                                menor = resposta[i2]['nome']
                            }
                        }
                        document.getElementById('quizDificil').innerHTML = menor
                    }

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );

} 