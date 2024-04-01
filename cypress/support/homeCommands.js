import loc from './locators'
import 'cypress-wait-until'

Cypress.Commands.add('cyref', ('/// <reference types="cypress"/>'));

//Valida acesso a Tela Home.
Cypress.Commands.add('acessaProjeto', () =>
{
    cy.get(loc.tela_Home.saudacao)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(68, 68, 68)')
        .and('contain', 'Welcome to our store')
})

Cypress.Commands.add('menuSuperior', () =>
{
    cy.get(loc.tela_Home.menuSuperior)
        .eq(0)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(119, 119, 119)')
        .and('contain', 'Register')

    cy.get(loc.tela_Home.menuSuperior)
        .eq(1)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(119, 119, 119)')
        .and('contain', 'Log in')

    cy.get(loc.tela_Home.menuSuperior)
        .eq(2)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(119, 119, 119)')
        .and('contain', 'Wishlist')

    cy.get(loc.tela_Home.menuSuperior)
        .eq(3)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(119, 119, 119)')
        .and('contain', 'Shopping cart')
})