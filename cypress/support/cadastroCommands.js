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

    cy.wait(3000)
})

Cypress.Commands.add('visitaCadastro', () =>
{
    cy.visit(Cypress.env("baseUrl"))

    cy.get(loc.tela_Home.opcaoCadastro)
        .click()

    cy.wait(3000)
})

Cypress.Commands.add('cadastroValidoCamposObrigatorios', () =>
{
    cy.get(loc.tela_Cadastro.tituloFormulario)
        .eq(0)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(68, 68, 68)')
        .and('contain', 'Your Personal Details')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.opcaoSexo)
        .should('be.visible')
        .and('contain', 'male')
        cy.get(loc.tela_Cadastro.opcaoMasculino)
            .click()
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.primeiroNome)
        .should('be.visible')
        .type(FirstName)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.ultimoNome)
        .should('be.visible')
        .type(LastName)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.dataNascimento)
        .eq(0)
        .should('be.visible')
        .select(DayBorn)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.dataNascimento)
        .eq(1)
        .should('be.visible')
        .select(MonthBorn)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.dataNascimento)
        .eq(2)
        .should('be.visible')
        .type(YearBorn)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.email)
        .should('be.visible')
        .type(Email)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.tituloFormulario)
        .eq(2)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(68, 68, 68)')
        .and('contain', 'Options')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.noticiasCheck)
        .should('be.visible')
        .and('have.attr', 'type', 'checkbox')
        .and('have.attr', 'data-val', 'true')
        .click()
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.tituloFormulario)
        .eq(3)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(68, 68, 68)')
        .and('contain', 'Your Password')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.senha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type(Password)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.confirmaSenha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type(ConfirmPassword)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.botaoCadastrar)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(74, 178, 241)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('contain', 'Register')
        .click()
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.confirmaRegistro)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(76, 177, 124)')
        .and('contain', 'Your registration completed')
    cy.wait(3000)
})

Cypress.Commands.add('cadastroInvalidoCamposObrigatorios', () =>
{
    cy.get(loc.tela_Cadastro.botaoCadastrar)
        .click()
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaPrimeiroNome)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'First name is required')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.primeiroNome)
        .should('be.visible')
        .type(FirstName)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaPrimeiroNome)
        .should('not.be.exist')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaUltimoNome)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Last name is required')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.ultimoNome)
        .should('be.visible')
        .type(LastName)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaUltimoNome)
        .should('not.be.exist')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaEmail)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Email is required')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.email)
        .should('be.visible')
        .type('testeDeAlerta')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaEmail)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Wrong email')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.email)
        .clear()
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.email)
        .should('be.visible')
        .type('testeDeAlerta@')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaEmail)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Wrong email')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.email)
        .clear()
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.email)
        .should('be.visible')
        .type(Email)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaEmail)
        .should('not.be.exist')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaSenha)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Password is required')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.senha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type('1')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaSenha)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Password must meet the following rules: must have at least 6 characters')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.senha)
        .clear()
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.senha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type('12345')
        cy.get(loc.tela_Cadastro.confirmaSenha)
            .click()
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaSenha)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Password must meet the following rules: must have at least 6 characters')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.senha)
        .clear()
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.senha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type(Password)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaSenha)
        .should('not.be.exist')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaConfirmaSenha)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'Password is required')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.confirmaSenha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type('12345')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaConfirmaSenha)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(228, 67, 75)')
        .and('contain', 'The password and confirmation password do not match.')
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.confirmaSenha)
        .clear()
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.confirmaSenha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type(ConfirmPassword)
    cy.wait(3000)

    cy.get(loc.tela_Cadastro.alertaConfirmaSenha)
        .should('not.be.exist')
    cy.wait(3000)
})