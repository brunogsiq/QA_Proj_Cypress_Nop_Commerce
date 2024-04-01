const locators= {
    tela_Home: {
        saudacao: '.topic-block-title > h2',
        menuSuperior: '.header-links > ul > li > a',
        opcaoCadastro: '.header-links > ul > li > .ico-register'
    },
    tela_Cadastro: {
        saudacao: '.page-title > h1',
        tituloFormulario: 'div > form > .fieldset > .title',
        opcaoSexo: '#gender',
        opcaoMasculino: '.male',
        primeiroNome: '#FirstName',
        ultimoNome: '#LastName',
        dataNascimento: '.date-picker-wrapper > select',
        email: '#Email',

        noticiasCheck: '.inputs > input[type="checkbox"]',
        senha: '#Password',
        confirmaSenha: '#ConfirmPassword',
        botaoCadastrar: '#register-button',

        confirmaRegistro: '.result'
    }
};

export default locators;