window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

let contadorCarrinho = document.querySelector('#carrinho-contagem');
let quantidadeCarrinho = 0;
let ValorTotal = 0 //valor total
let limite1 = 5
let limite2 = 1

//

let listaCarrinho = document.createElement('section');
    listaCarrinho.id = 'lista-carrinho';
    listaCarrinho.style.position = 'fixed';
    listaCarrinho.style.top = '150px';
    listaCarrinho.style.right = '20px';
    listaCarrinho.style.color = '#000';
    listaCarrinho.style.padding = '10px';
    listaCarrinho.style.borderRadius = '10px';
    listaCarrinho.style.display = 'none';
    listaCarrinho.style.cursor = 'pointer';
    document.body.appendChild(listaCarrinho);

//

let titulo = document.createElement('h2')
    titulo.innerHTML = 'Seu carrinho!'
    titulo.classList.add('seucarrinho')
    titulo.style.textAlign = 'center'
    titulo.style.marginBottom = '10px'
    listaCarrinho.style.color = 'var(--main-color)'
    listaCarrinho.appendChild(titulo)
//

let Valor= document.createElement('p')
    Valor.classList.add('valor')
    Valor.style.marginTop = '10px';
    Valor.style.fontWeight = 'bold';
    Valor.textContent = 'Total: R$ 0.00';
    Valor.style.paddingLeft = '30px'
    Valor.style.paddingBottom = '10px'
    listaCarrinho.appendChild(Valor)
//

let listaUl = document.createElement('ul');
    listaUl.classList.add('lista')
    listaCarrinho.appendChild(listaUl)


//

let limpar = document.createElement('button')
    limpar.textContent = 'limpar carrinho. 🗑️'
    limpar.classList.add('limpar')
    listaCarrinho.appendChild(limpar);
    
    

let comprar = document.createElement('button')
    comprar.textContent = 'fazer compra! ✅'
    comprar.classList.add('comprar')
    listaCarrinho.appendChild(comprar);
    
     

let fechar = document.createElement("div")
    fechar.textContent = '❌'
    fechar.style.position = "absolute";
    fechar.style.top = "10px";
    fechar.style.right = "10px";
    fechar.style.cursor = "pointer";
    fechar.style.fontSize = "25px";
    fechar.style.color = 'red'


    fechar.addEventListener('click', () =>{
        listaCarrinho.style.display = 'none'
    })

    listaCarrinho.appendChild(fechar)
//

function addCarrinho(nome, preco) {

    if(quantidadeCarrinho >= limite1){
        alert('vc atingiu o limite de itens no carrinho!')
        return
    }   
    
    quantidadeCarrinho += 1;
    contadorCarrinho.innerText = `(${quantidadeCarrinho})`;
    ValorTotal += preco //soma preço atual

let item = document.createElement('li');
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    item.style.marginBottom = '08px'
    item.style.listStyleType = 'none'
    item.style.textAlign = 'center'
    item.classList.add('itens')
    listaUl.appendChild(item);
    listaCarrinho.style.display = 'block';
    
    Valor.textContent = `total: R$ ${ValorTotal.toFixed(2)}`

    salvarCarrinho()
}

// Abre e fecha o carrinho ao clicar no ícone
let carrinhoIcone = document.querySelector('#carrinho');
    carrinhoIcone.addEventListener('click', function() {

    const pesquisa = document.querySelector('#container-pesquisa')
    if(pesquisa && pesquisa.style.display === 'block') {
        pesquisa.style.display = 'none'
    }

    if (listaCarrinho.style.display === 'none') {
        listaCarrinho.style.display = 'block';
    } else {
        listaCarrinho.style.display = 'none';
    }
})

limpar.addEventListener('click', function(){
    ValorTotal = 0
    quantidadeCarrinho = 0
    contadorCarrinho.innerText = '(0)'
    listaUl.innerText = ''
    listaCarrinho.style.display = 'none'

    Valor.textContent = 'Total: R$ 0.00'

    salvarCarrinho()

    animarCarrinho()
})

function animarCarrinho(){
    carrinhoIcone.style.animation = 'none';
    void carrinhoIcone.offsetWidth; 
    carrinhoIcone.style.animation = 'carrinho 0.9s ease';
}

comprar.addEventListener('click', function(){

    if(quantidadeCarrinho < limite2){
        alert('Por favor, adicione pelo menos um item ao seu carrinho para efetuar sua compra.');
        return;
    }
    listaCarrinho.style.display = 'none'
    alert(`Sua compra foi realizada!`)
    ValorTotal = 0
    quantidadeCarrinho = 0
    contadorCarrinho.innerText = '(0)'
    listaUl.innerText = ''
    listaCarrinho.style.display = 'none';
    Valor.textContent = 'Total: R$ 0.00';

    salvarCarrinho()

    animarCarrinho()
})

function salvarCarrinho(){
    const itens = []
    
    // Percorre todos os <li> adicionados no carrinho
    document.querySelectorAll('.itens').forEach(item =>{
        const texto = item.textContent
        const [nome, preco] = texto.split('- R$')
        itens.push({nome: nome.trim(), preco: parseFloat(preco)})
    })

    // Cria objeto para salvar
    const dados = {
        itens,
        quantidade: quantidadeCarrinho,
        total: ValorTotal
    }

    localStorage.setItem('carrinho', JSON.stringify(dados))
}
    // Salva no navegador como string JSON
    

    // 🔁 RESTAURA CARRINHO AO CARREGAR A PÁGINA
    function restaurarCarrinho(){
        const dados = JSON.parse(localStorage.getItem('carrinho'))
        if (!dados) return

        dados.itens.forEach(item => {
            const li = document.createElement('li')
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`
            li.classList.add('itens')
            li.style.marginBottom = '08px'
            li.style.listStyleType = 'none';
            li.style.textAlign = 'center';
            listaUl.appendChild(li);
        })

        quantidadeCarrinho = dados.quantidade
        ValorTotal = dados.total
        contadorCarrinho.innerText = `(${quantidadeCarrinho})`
        Valor.textContent = `total: R$ ${ValorTotal.toFixed(2)}`
        listaCarrinho.style.display = 'none';
    }
    // 🚀 Ativa restauração assim que o script carregar
    restaurarCarrinho();

