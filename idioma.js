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
}