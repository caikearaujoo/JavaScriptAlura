let totalGeral;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; //0 pois o array separa a palavra em 2 e queremos o nome, que vem primeiro
    let valorUnitario = produto.split('R$')[1];
    let qtd = document.getElementById('quantidade').value;

    let preco = qtd * valorUnitario;
    if(qtd>0){
        let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent =`R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
    }
    else{
        adicionar();
    }
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}