import loc from './locators'
import 'cypress-wait-until'

const { faker } = require('@faker-js/faker');
const FirstName = faker.name.firstName('male');
const LastName = faker.name.lastName('male');
const DayBorn = faker.datatype.number({ min: 1, max: 31 });
const MonthBorn = faker.datatype.number({ min: 1, max: 12 });
const YearBorn = faker.datatype.number({ min: 1914, max: 2024 });
const Email = faker.internet.email();
const Password = faker.internet.password(12, false, /[\w\d\S]*[\w\d\S\?][\w\d\S]*/);
const ConfirmPassword = Password;

Cypress.Commands.add('acessaCadastro', () =>
{
    cy.visit(Cypress.env("baseUrl"))

    cy.get(loc.tela_Home.opcaoCadastro)
        .click()

    cy.get(loc.tela_Cadastro.saudacao)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(68, 68, 68)')
        .and('contain', 'Register')
})

Cypress.Commands.add('visitaCadastro', () =>
{
    cy.visit(Cypress.env("baseUrl"))

    cy.get(loc.tela_Home.opcaoCadastro)
        .click()
})

Cypress.Commands.add('cadastroValidoCamposObrigatorios', () =>
{
    cy.get(loc.tela_Cadastro.tituloFormulario)
        .eq(0)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(68, 68, 68)')
        .and('contain', 'Your Personal Details')

    cy.get(loc.tela_Cadastro.opcaoSexo)
        .should('be.visible')
        .and('contain', 'male')
        cy.get(loc.tela_Cadastro.opcaoMasculino)
            .click()

    cy.get(loc.tela_Cadastro.primeiroNome)
        .should('be.visible')
        .type(FirstName)

    cy.get(loc.tela_Cadastro.ultimoNome)
        .should('be.visible')
        .type(LastName)

    cy.get(loc.tela_Cadastro.dataNascimento)
        .eq(0)
        .should('be.visible')
        .select(DayBorn)

    cy.get(loc.tela_Cadastro.dataNascimento)
        .eq(1)
        .should('be.visible')
        .select(MonthBorn)

    cy.get(loc.tela_Cadastro.dataNascimento)
        .eq(2)
        .should('be.visible')
        .type(YearBorn)

    cy.get(loc.tela_Cadastro.email)
        .should('be.visible')
        .type(Email)

    cy.get(loc.tela_Cadastro.tituloFormulario)
        .eq(2)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(68, 68, 68)')
        .and('contain', 'Options')

    cy.get(loc.tela_Cadastro.noticiasCheck)
        .should('be.visible')
        .and('have.attr', 'type', 'checkbox')
        .and('have.attr', 'data-val', 'true')
        .click()

    cy.get(loc.tela_Cadastro.tituloFormulario)
        .eq(3)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(68, 68, 68)')
        .and('contain', 'Your Password')

    cy.get(loc.tela_Cadastro.senha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type(Password)

    cy.get(loc.tela_Cadastro.confirmaSenha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type(ConfirmPassword)

    cy.get(loc.tela_Cadastro.botaoCadastrar)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(74, 178, 241)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('contain', 'Register')
        .click()

    cy.get(loc.tela_Cadastro.confirmaRegistro)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(76, 177, 124)')
        .and('contain', 'Your registration completed')
})

Cypress.Commands.add('cadastroInvalidoCamposObrigatorios', () =>
{
    cy.get(loc.tela_Cadastro.botaoCadastrar)
        .click()

    cy.get(loc.tela_Cadastro.alertaPrimeiroNome)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'First name is required')

    cy.get(loc.tela_Cadastro.primeiroNome)
        .should('be.visible')
        .type(FirstName)

    cy.get(loc.tela_Cadastro.alertaPrimeiroNome)
        .should('not.be.exist')

    cy.get(loc.tela_Cadastro.alertaUltimoNome)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Last name is required')

    cy.get(loc.tela_Cadastro.ultimoNome)
        .should('be.visible')
        .type(LastName)

    cy.get(loc.tela_Cadastro.alertaUltimoNome)
        .should('not.be.exist')

    cy.get(loc.tela_Cadastro.alertaEmail)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Email is required')

    cy.get(loc.tela_Cadastro.email)
        .should('be.visible')
        .type(Email)

    cy.get(loc.tela_Cadastro.alertaEmail)
        .should('not.be.exist')

    cy.get(loc.tela_Cadastro.alertaSenha)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Password is required')

    cy.get(loc.tela_Cadastro.senha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type(Password)

    cy.get(loc.tela_Cadastro.alertaSenha)
        .should('not.be.exist')

    cy.get(loc.tela_Cadastro.alertaConfirmaSenha)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Password is required')

    cy.get(loc.tela_Cadastro.confirmaSenha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type(ConfirmPassword)

    cy.get(loc.tela_Cadastro.alertaConfirmaSenha)
        .should('not.be.exist')
})