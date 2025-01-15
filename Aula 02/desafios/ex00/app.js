// 1. Função para calcular o IMC
function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

// 2. Função para calcular o fatorial
function calcularFatorial(numero) {
    if (numero < 0) return undefined; // Fatorial não existe para números negativos
    if (numero === 0 || numero === 1) return 1;
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// 3. Função para converter dólar em reais
function converterDolarParaReal(valorDolar) {
    const cotacaoDolar = 4.80;
    return (valorDolar * cotacaoDolar).toFixed(2);
}

// 4. Função para calcular a área e o perímetro de uma sala retangular
function calcularSalaRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    console.log(`Área: ${area.toFixed(2)} m²`);
    console.log(`Perímetro: ${perimetro.toFixed(2)} m`);
}

// 5. Função para calcular a área e o perímetro de uma sala circular
function calcularSalaCircular(raio) {
    const pi = 3.14;
    const area = pi * (raio ** 2);
    const perimetro = 2 * pi * raio;
    console.log(`Área: ${area.toFixed(2)} m²`);
    console.log(`Perímetro: ${perimetro.toFixed(2)} m`);
}

// 6. Função para mostrar a tabuada de um número
function mostrarTabuada(numero) {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
