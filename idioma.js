const textos = {
    pt: {
        titulo: "code com o melhor café da região!",
        home: "inicio",
        sobre: "sobre",
        menu: "menu",
        review: "avaliaçoes",
        adress: "endereço",
        pegue: "Pegue o seu agora",
        nos: "sobre nós",
        cafeEspecial: "O que faz nosso café ser especial?",
        nossaCafeteria: "",
        saiba: "saiba mais"

    },

    en: {
        titulo: "code with the best coffee in the region!",
        home: "home",
        sobre: "about",
        menu: "menu",
        review: "review",
        adress: "addres",
        pegue: "Get yours now",
        nos: "about us",
        cafeEspecial: "What makes our coffee special?",
        nossaCafeteria: "",
        saiba: "know us"
    },

    fr: {
        titulo: "code avec le meilleur café de la région !",
        home: "commencer",
        sobre: "sur",
        menu: "menu",
        review: "revoir",
        adress: "adresse",
        pegue: "Obtenez le vôtre!",
        nos: "à propos de nous",
        cafeEspecial: "Qu'est-ce qui rend notre café spécial ?",
        nossaCafeteria: "",
        saiba: "apprendre encore plus"
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
            el.textContent = textos[idioma][chave]       
         }
    })
}
    const seletorIdioma = document.getElementById('idioma')

    let idioma = localStorage.getItem('idioma')

    // Se não tiver salvo, detecta o idioma do navegador
    if(!idioma){
        const idiomaAtual = navigator.language.slice(0,2)
        const idiomasSuportados = ['pt', 'en', 'fr']

        // Se for 'pt', mantém; senão, coloca 'en' como padrão
        idioma =  idiomasSuportados.includes(idiomaAtual) ? idiomaAtual : 'pt'
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
