const textos = {
    pt: {
        titulo: "code com o melhor café da região!",
        home: "inicio",
        sobre: "sobre",
        menu: "menu",
        review: "avaliaçoes",
        adress: "endereço",
        Bemvindo: "Seja bem-vindo à nossa cafeteria!Aqui, você encontra um ambiente acolhedor e perfeito para saborear cafés especiais, chás aromáticos e deliciosos quitutes preparados com muito carinho. Nosso espaço foi pensado para proporcionar conforto e boas experiências, seja para um momento de tranquilidade, um encontro com amigos ou uma reunião de trabalho.",
        pegue: "Pegue o seu agora",
        nos: "sobre nós",
        cafeEspecial: "O que faz nosso café ser especial?",
        nossaCafeteria: "Na nossa cafeteria, cada xícara conta uma história. Aqui você encontra muito mais do que cafés especiais: oferecemos um espaço acolhedor para você relaxar, trabalhar, encontrar amigos ou simplesmente apreciar um momento só seu. Trabalhamos com grãos selecionados de alta qualidade, preparados por baristas apaixonados pelo que fazem. Do espresso intenso ao cappuccino cremoso, cada bebida é feita com carinho para proporcionar uma experiência única. Além disso, nosso cardápio conta com opções irresistíveis de bolos, pães artesanais, lanches e doces que combinam perfeitamente com o café.",
        saiba: "saiba mais",
        nosso: "nosso menu",
        coado: "café coado",
        canela: "café com canela",
        add: "",
        cap: "capuccino",
        exp: "café expresso",
        puro: "café puro",
        amer: "café americano",
        coadoP: "R$ 15,99.",
        canelaP: "R$ 16,99.",
        capP: "R$ 13,99",
        expP: "R$ 11,99",
        puroP: "R$ 8,99",
        amerP: "RS 10,99",

        

    },

    en: {
        titulo: "code with the best coffee in the region!",
        home: "home",
        sobre: "about",
        menu: "menu",
        review: "review",
        adress: "addres",
        Bemvindo: "Welcome to our coffee shop! Here, you will find a cozy and perfect environment to enjoy specialty coffees, aromatic teas and delicious treats prepared with great care. Our space was designed to provide comfort and good experiences, whether for a moment of tranquility, a meeting with friends or a business meeting.",
        pegue: "Get yours now",
        nos: "about us",
        cafeEspecial: "What makes our coffee special?",
        nossaCafeteria: "In our coffee shop, every cup tells a story. hete, you will find much more than just speciality coffees. we offer a welcoming space for you to relax, work, meet friends or simply enjoy some time alone. We work with selected, high-quality beans, prepared by baristas who are passionate about what they do. From intense espresso to creamy cappuccino, each drink is made with care to provide a unique experience, in addition, our menu features irresistible options of cakes, artisanal breads, snacks and sweets that pair perfectly with coffee.",
        saiba: "know us",
        nosso: "our menu",
        coado: "filtered coffee",
        canela: "coffee with cinnamon",
        add: "",
        cap: "cappuccino",
        exp: "express",
        puro: "pure coffee",
        amer: "American coffee",
        coadoP: "US$ 3,20",
        canelaP: "US$ 3.40",
        capP: "US$ 2,80",
        expP: "US$ 2,40",
        puroP: "US$ 1,80",
        amerP: "US$ 2,20",
    },

    fr: {
        titulo: "code avec le meilleur café de la région !",
        home: "commencer",
        sobre: "sur",
        menu: "menu",
        review: "revoir",
        adress: "adresse",
        Bemvindo: "Bienvenue dans notre café! Ici, vous rencontrez une ambiance agréable et parfaite pour déguster des cafés spéciaux, des produits aromatiques et délicieux préparés avec beaucoup de sucre. Notre espace a été pensé pour offrir du confort et de belles expériences, seja pour un moment de tranquillité, une rencontre avec des amis ou une réunion de travail.",
        pegue: "Obtenez le vôtre!",
        nos: "à propos de nous",
        cafeEspecial: "Qu'est-ce qui rend notre café spécial ?",
        nossaCafeteria: "Dans notre cafétéria, chaque fois, il y a une histoire. Ici, vous rencontrez bien plus que les cafés spéciaux : nous offrons un espace agréable pour vous détendre, travailler, rencontrer des amis ou simplement apprécier un moment comme vous. Nous travaillons avec de grands sélectionnés de haute qualité, préparés par les baristas apaixonados pour que cela se fasse. Faire un expresso intense avec un cappuccino cremoso, chaque boisson est faite avec du café pour offrir une expérience unique. En outre, nous avons des cartes avec des options irrésistibles de bols, de restaurants artisanaux, de restaurants et de cours qui se combinent parfaitement avec le café.",
        saiba: "apprendre encore plus",
        nosso: "notre menu",
        coado: "café filtré",
        canela: "café à la cannelle",
        add: "",
        cap: "cappuccino",
        exp: "exprimer",
        puro: "café pur",
        amer: "café américain",
        coadoP: "€ 2,91",
        canelaP: "€ 3,09",
        capP: "€ 2,54",
        expP: "€ 2,18",
        puroP: "€ 1,63",
        amerP: "€ 2,00",
        
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
