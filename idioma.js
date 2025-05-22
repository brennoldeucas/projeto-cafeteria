const textos = {
    pt: {
        titulo: "code com o melhor café da região!"
    },

    en: {
        titulo: "code with the best coffee in the region!"
    }
}

function aplicarIdioma(idioma){
    // Seleciona todos os elementos com data-i18n
    const elementos = document.querySelectorAll('[data-i18n]')

    elementos.forEach (el => {
        // Pega a chave definida no atributo data-i18n
        const chave = el.getAttribute('data-i18n')

        // Se houver uma tradução para esta chave, troca o conteúdo
        if(textos[idioma][chave]){
            el.textContent = textos[idioma][chave]        }
    })

    const seletorIdioma = document.getElementById('idioma')

    let idioma = localStorage.getItem('idioma')

    // Se não tiver salvo, detecta o idioma do navegador
    if(!idioma){
        const idiomaAtual = navigator.language.slice(0,2)

        // Se for 'pt', mantém; senão, coloca 'en' como padrão
        idioma =  idiomaAtual === 'pt'? 'pt' : 'en'
    }

    // Ajusta o <select> de idiomas na interface
    seletorIdioma.value = idioma

    aplicarIdioma(idioma)

    seletorIdioma.addEventListener('change', () =>{
        // Pega o novo idioma selecionado
        const novoIdioma = seletorIdioma.value

        // Aplica o novo idioma na página
        aplicarIdioma(novoIdioma)

        // Salva a escolha para lembrar depois
        localStorage.setItem('idioma', novoIdioma)
    })
}