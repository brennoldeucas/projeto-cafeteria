

// cria container da barra de pesquisa
const containerPesquisa = document.createElement('section');
containerPesquisa.id = 'container-pesquisa';
containerPesquisa.style.position = 'fixed';
containerPesquisa.style.top = '150px';
containerPesquisa.style.right = '120px';
containerPesquisa.style.background = '#fff';
containerPesquisa.style.border = '1px solid #ccc';
containerPesquisa.style.borderRadius = '10px';
containerPesquisa.style.zIndex = '9999';
containerPesquisa.style.display = 'none';
document.body.appendChild(containerPesquisa);  

//cria o imput de busca
const Busca = document.createElement('input')
Busca.classList.add('busca')
Busca.type = 'text'
Busca.placeholder = 'Buscar produto...🔎'
Busca.style.width = '90%';
Busca.style.padding = '10px'
Busca.style.marginBottom = '15px'
Busca.style.border = '1px solid #ccc';
Busca.style.borderRadius = '5px';
containerPesquisa.appendChild(Busca);

//resultado
const resultado = document.createElement('div')
resultado.id = 'resultado'
resultado.style.maxHeight = '200px';
resultado.style.overflowY = 'auto';
containerPesquisa.appendChild(resultado)

//mostrar e esconder ao clicar
const icone = document.querySelector('#procurar')
icone.addEventListener('click', ()=>{

    const carrinho = document.querySelector('#lista-carrinho')
    if(carrinho && carrinho.style.display === 'block'){
        carrinho.style.display = 'none'
    }

    if(containerPesquisa.style.display === 'none'){
        containerPesquisa.style.display = 'block'
        Busca.focus()
    }else{
        containerPesquisa.style.display = 'none'
        Busca.value = ''
        resultado.innerHTML = ''
    }
    
})

const fecharP = document.createElement('div')
    fecharP.textContent = "❌"
    fecharP.style.position = "absolute";
    fecharP.style.top = "10px";
    fecharP.style.right = "10px";
    fecharP.style.cursor = "pointer";
    fecharP.style.fontSize = "25px";
    fecharP.style.color = 'red'

    fechar.addEventListener('click', ()=>{
        containerPesquisa.style.display = 'none'
    })

    containerPesquisa.appendChild(fecharP)

//lista simulada de produtos
const produtos = [
    {nome: 'Café coado', preco: 15.99},
    {nome: 'Café com canela', preco: 16.99},
    {nome: 'Capputino', preco: 13.99},
    {nome: 'Café expresso', preco: 11.99},
    {nome: 'Café puro', preco: 8.99},
    {nome: 'Café americano', preco: 10.99},
]

Busca.addEventListener('input', () =>{
    const termo = Busca.value.toLowerCase().trim()

     // Limpa a exibição de resultados anteriores
    resultado.innerHTML = ''

    // Filtra os produtos que contém o termo de pesquisa
    const produtosFiltrados = produtos.filter(produto => {
        return produto.nome.toLowerCase().includes(termo) || produto.preco.toString().includes(termo)
    })

// Se encontrar algum produto correspondente
if (produtosFiltrados.length > 0){
    // Exibe os produtos filtrados
    produtosFiltrados.forEach(produto => {
        const divProduto = document.createElement('div')
        divProduto.textContent = `${produto.nome}- R$ ${produto.preco.toFixed(2)}`
        divProduto.classList.add('item-pesquisa')
        resultado.appendChild(divProduto)

        divProduto.addEventListener('click', ()=> {
            const idProduto = produto.nome.toLowerCase().replace(/\s+/g, '-') // Substitui espaços por hífens
            const elemento = document.getElementById(idProduto)

            if(elemento){ 
                const bordaOriginal = window.getComputedStyle(elemento).border || 'none';
                elemento.scrollIntoView({behavior: 'smooth', block: 'center'})
                elemento.style.border = '2px solid orange'
                setTimeout(() => {elemento.style.border= bordaOriginal}, 1500)
                
            }
        })
    })
}
})
