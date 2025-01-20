let arrayAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    let nome = nomeAmigo.value.trim();

    if (nome === '') {
        alert('O nome não pode estar vazio!');
        return;
    }

    if (arrayAmigos.includes(nome)) {
        alert('Esse nome já foi adicionado à lista!');
        nomeAmigo.value = '';
        return;
    }

    arrayAmigos.push(nomeAmigo.value);

    listaAmigos.textContent = arrayAmigos.join(', ');

    nomeAmigo.value = '';
}

function sortear() {
    if(arrayAmigos.length < 4){
        alert('Digite pelo menos 4 pessoas!!!');
        return;
    }
    embaralha(arrayAmigos); 
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''; 

    // Gera o sorteio
     for(let i = 0; i < arrayAmigos.length; i++){
        if(i == (arrayAmigos.length - 1)){
            sorteio.innerHTML = sorteio.innerHTML + arrayAmigos[i] + ' --> ' + arrayAmigos[0] + '<br>';
        }
        else{
            sorteio.innerHTML = sorteio.innerHTML + arrayAmigos[i] + ' --> ' + arrayAmigos[i+1] + '<br>';
        }
    }
}

function reiniciar() {
    arrayAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function embaralha(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * (i + 1));
        [array[i], array[indiceAleatorio]] = [array[indiceAleatorio], array[i]];
    }
}
