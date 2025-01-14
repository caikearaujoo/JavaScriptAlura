alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = parseInt(prompt('Você quer que o número secreto seja entre 0 e quanto?'));
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //o +1 é para que tenha um número entre 0 e 10, se não, pararia no 9;
console.log(numeroSecreto); //Só para saber qual a resposta no ambiente de desenvolvimento(Inspecionar do google)
let chute;
let tentativa = 1;

while(chute != numeroSecreto){
    chute = parseInt(prompt(`Escolha um número entre 1 a ${numeroMaximo}`));

    //se chute for igual ao numeroSecreto, queremos printar que o jogador acertou o número

    if(chute == numeroSecreto){
        break;
    }else if(chute < numeroSecreto){
        alert(`O número secreto é maior que o ${chute}!!`);
    }
    else{
        alert(`O número secreto é menor que o ${chute}!!`);
}
tentativa++;
}

//Uso de ternário para atribuir o valor da string dependendo da condição de tentativa ser mais do que 1
//let palavraTentativa = tentativaa > 1? 'tentativas' : 'tentativa'
//alert(`Isso aí!Você descobriu o número secreto (${numeroSecreto}) com apenas ${tentativa} ${palavraTentativa} :)` ); 

if(tentativa>1){
    alert(`Isso aí!Você descobriu o número secreto (${numeroSecreto}) com apenas ${tentativa} tentativas :)` );  
}
else{
    alert(`Isso aí!Você descobriu o número secreto (${numeroSecreto}) com apenas ${tentativa} tentativa :)` );  
}
