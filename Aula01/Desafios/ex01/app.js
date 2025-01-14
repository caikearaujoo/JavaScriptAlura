alert('Boas vindas ao nosso site!');
let diaSemana = prompt('Qual o dia da semana?');
if(diaSemana == 'Sábado' || diaSemana == 'Sabado' || diaSemana == 'Domingo'){
    alert('Bom fim de semana!');
}
else{
    alert('Boa semana');
}

let num = prompt('Digite um número: ');
if(num >= 0){
    alert('Número positivo!');
}
else{
    alert('Número negativo!');
}

let pontuacao = prompt('Digite sua pontuação no jogo: ');
if(pontuacao >= 100){
    alert('Parabéns, você venceu!');
}
else{
    alert('Tente novamente para ganhar...');
}

let saldo = 1500;
alert(`O saldo da sua conta é ${saldo} reais`);

let nome = prompt('Digite seu nome: ');
alert('Boas vindas ' + nome + '!!');