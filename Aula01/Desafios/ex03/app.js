console.log('Boas vindas!');
let nome = 'Caike';

console.log(`Olá, ${nome}!`);
alert(`Olá,${nome}!`);

let resposta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(resposta);

let valor1 = 5;
let valor2 = 7;

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

valor1 = 7;
valor2 = 5;

resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`)

let idade = parseInt(prompt('Qual sua idade?'));
if(idade<18){
    console.log('Você é menor de idade!');
}
else{
    console.log('Você é maior de idade!');
}

let num = parseInt(prompt('Digite um número qualquer: '));
if(num < 0){
    alert('Número negativo!');
}
else if(num>0){
    alert('Número positivo!');
}
else{
    alert('Número é zero!');
}

num = 1;

while(num<=10){
    alert(num);
    num++;
}

let nota = parseFloat(prompt('Digite sua nota: '));
if(nota<7){
    alert('Reprovado!');
}
else{
    alert('Aprovado');
}

let aleatorio = Math.random();
alert(aleatorio);

aleatorio = (Math.random() * 10 + 1);
aleatorio = (Math.random() * 1000 + 1);