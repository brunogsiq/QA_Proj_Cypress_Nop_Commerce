/// <reference types="cypress"/>

var Context = 0;
var Describe = 0;
var Teste = 0;
var Complemento = 0;

context(`${++Context} - Plataforma Web - Tela de Home.`, () =>
{

    describe(`Cenário ${++Describe} - Validação de Rotas de Acesso.`, () =>
    {
        beforeEach(() =>
        {
            cy.visit(Cypress.env("baseUrl"))
        });

        it(`Teste ${++Teste}.${++Complemento} - Validar Acesso a Url.`, () =>
        {
            cy.url()
                .should('eq', 'https://demo.nopcommerce.com/')
        });

        it(`Teste ${Teste}.${++Complemento} - Validar Status de Acesso a Url.`, () =>
        {
            cy.request(Cypress.env("baseUrl"))
                .its('status')
                .should('eq', 200)
        });

        it(`Teste ${Teste}.${++Complemento} - Validar Acesso a Tela Home.`, () =>
        {
            cy.acessaProjeto()
        });
    });

    describe(`Cenário ${++Describe} - Validação de Critérios de Aceite.`, () =>
    {
        beforeEach(() =>
        {
            cy.visit(Cypress.env("baseUrl"))
        });


        it(`Teste ${Teste}.${++Complemento} - Validar Componentes Visuais.`, () =>
        {
            //COMPREENDER QUAIS SERÃO OS COMPONENTES DESTA TELA
        });
    });

    describe(`Cenário ${++Describe} - Validação de Testes Funcionais.`, () =>
    {
        beforeEach(() =>
        {
            cy.visit(Cypress.env("baseUrl"))
        });


        it(`Teste ${Teste}.${++Complemento} - Validar Itens do Menu Superior.`, () =>
        {
            cy.menuSuperior()
        });
    });
});