// Pega o elemento checkbox (o switch de tema)
const toggle = document.getElementById('toggle-tema')

// Verifica se o usuário já tem preferência de tema salva no navegador

if(localStorage.getItem('tema') === 'claro'){
// Se o tema salvo for "claro", adiciona a classe 'modo-claro' no <body>
document.body.classList.add('modo-claro')

toggle.checked = true
}

// Quando o usuário clica no switch
toggle.addEventListener('change', () =>{
    if(toggle.checked){
    // Se está marcado (ligado), ativa o modo claro
    document.body.classList.add('modo-claro')   

    // Salva a preferência no navegador
    localStorage.setItem('tema', 'claro')
    }else{
    // Se está desmarcado (desligado), volta para o modo escuro
    document.body.classList.remove('modo-claro')

    localStorage.setItem('tema', 'escuro')
    }
})