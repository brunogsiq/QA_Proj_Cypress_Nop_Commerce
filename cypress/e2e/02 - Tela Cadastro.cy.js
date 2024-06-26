/// <reference types="cypress"/>

var Context = 1;
var Describe = 3;
var Teste = 1;
var Complemento = 0;

context(`${++Context} - Plataforma Web - Tela de Home.`, () =>
{
    describe(`Cenário ${++Describe} - Validação de Rotas de Acesso.`, () =>
    {
        it(`Teste ${++Teste}.${++Complemento} - Validar Acesso a Tela Cadastro.`, () =>
        {
            cy.acessaCadastro()
        });

        it(`Teste ${Teste}.${++Complemento} - Validar Acesso a Url.`, () =>
        {
            cy.visitaCadastro()

            cy.url()
                .should('eq', 'https://demo.nopcommerce.com/register?returnUrl=%2F')
        });

        it(`Teste ${Teste}.${++Complemento} - Validar Status de Acesso a Url.`, () =>
        {
            cy.visitaCadastro()

            cy.request('https://demo.nopcommerce.com/register?returnUrl=%2F')
                .its('status')
                .should('eq', 200)
        });
    });

    describe(`Cenário ${++Describe} - Validação de Critérios de Aceite.`, () =>
    {
        beforeEach(() =>
        {
            cy.visitaCadastro()
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
            cy.visitaCadastro()
        });

        it(`Teste ${Teste}.${++Complemento} - Validar Cadastro Válido - Somente Campos Obrigatórios`, () =>
        {
            cy.cadastroValidoCamposObrigatorios()
        });

        it(`Teste ${Teste}.${++Complemento} - Validar Visão dos Aleras Para Cadastro Inválido - Somente Campos Obrigatórios`, () =>
        {
            cy.cadastroInvalidoCamposObrigatorios()
        });
    });
});