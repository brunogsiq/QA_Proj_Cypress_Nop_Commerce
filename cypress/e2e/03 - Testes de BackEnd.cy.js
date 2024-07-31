/// <reference types="cypress"/>

var Context = 2;
var Describe = 6;
var Teste = 2;
var Complemento = 0;

let { faker } = require('@faker-js/faker');
let FullName = faker.name.fullName('male');
let Email = faker.internet.email();
let Password = faker.internet.password(12, false, /[\w\d\S]*[\w\d\S\?][\w\d\S]*/);
let NewEmail = faker.internet.email();
let NewPassword = faker.internet.password(12, false, /[\w\d\S]*[\w\d\S\?][\w\d\S]*/);

context(`${++Context} - Teste de API - BackEnd - https://serverest.dev/`, () =>
{
    describe(`Cenário ${++Describe} - Teste de Fluxo de Usuários`, () =>
    {
        let usuarioId;
        let authToken;
        it(`Teste ${++Teste}.${++Complemento} - POST - Cadastrar Usuário`, () =>
        {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/login',
                body: {
                    "email": "fulano@qa.com",
                    "password": "teste"
                }
            }).then((loginResponse) =>
            {
                authToken = loginResponse.body.authorization;
                cy.request({
                    method: 'POST',
                    url: 'https://serverest.dev/usuarios',
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    },
                    body: {
                        "nome": FullName,
                        "email": Email,
                        "password": Password,
                        "administrador": "true"
                    }
                }).then((cadastroResponse) =>
                {
                    expect(cadastroResponse.status).to.equal(201);
                    expect(cadastroResponse.body.message).to.equal('Cadastro realizado com sucesso');
                    usuarioId = cadastroResponse.body._id;
                    cy.log(`ID do usuário: ${usuarioId}`);
                });
            })
        });

        it(`Teste ${Teste}.${++Complemento} - GET - Busca Usuário`, () =>
        {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/login',
                body: {
                    "email": "fulano@qa.com",
                    "password": "teste"
                }
            })
            cy.request({
                method: 'GET',
                url: `https://serverest.dev/usuarios/${usuarioId}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((buscaResponse) =>
            {
                expect(buscaResponse.status).to.equal(200);
                expect(buscaResponse.body.nome).to.equal(FullName);
                expect(buscaResponse.body.email).to.equal(Email);
                expect(buscaResponse.body.password).to.equal(Password);
           });
        });

        it(`Teste ${Teste}.${++Complemento} - PUT - Atualiza Usuário`, () =>
        {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/login',
                body: {
                    "email": "fulano@qa.com",
                    "password": "teste"
                }
            })
            cy.request({
                method: 'GET',
                url: `https://serverest.dev/usuarios/${usuarioId}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((buscaResponse) =>
            {
                expect(buscaResponse.body.nome).to.equal(FullName);
                expect(buscaResponse.body.email).to.equal(Email);
                expect(buscaResponse.body.password).to.equal(Password);
                expect(buscaResponse.body.administrador).to.equal('true');
           })
            cy.request({
                method: 'PUT',
                url: `https://serverest.dev/usuarios/${usuarioId}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                },
                body: {
                    "nome": FullName,
                    "email": NewEmail,
                    "password": NewPassword,
                    "administrador": "true"
                }
            }).then((atualizacaoResponse) =>
            {
                expect(atualizacaoResponse.status).to.equal(200);
                expect(atualizacaoResponse.body.message).to.equal('Registro alterado com sucesso');

                cy.request({
                    method: 'GET',
                    url: `https://serverest.dev/usuarios/${usuarioId}`,
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                }).then((buscaResponse) => {
                    expect(buscaResponse.body.nome).to.equal(FullName);
                    expect(buscaResponse.body.email).to.equal(NewEmail);
                    expect(buscaResponse.body.password).to.equal(NewPassword);
                    expect(buscaResponse.body.administrador).to.equal('true');
                });
            })
        })

        it(`Teste ${Teste}.${++Complemento} - DELETE - Remove Usuário`, () =>
        {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/login',
                body: {
                    "email": "fulano@qa.com",
                    "password": "teste"
                }
            })
            cy.request({
                method: 'GET',
                url: `https://serverest.dev/usuarios/${usuarioId}`,
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((buscaResponse) =>
            {
                expect(buscaResponse.body.nome).to.equal(FullName);
                expect(buscaResponse.body.email).to.equal(NewEmail);
                expect(buscaResponse.body.password).to.equal(NewPassword);
                expect(buscaResponse.body.administrador).to.equal('true');

                cy.request({
                    method: 'DELETE',
                    url: `https://serverest.dev/usuarios/${usuarioId}`,
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    },
                failOnStatusCode: false
                }).then((deleteResponse) =>
                {
                    expect(deleteResponse.status).to.equal(200);
                    expect(deleteResponse.body.message).to.equal('Registro excluído com sucesso');
        
                    cy.request({
                        method: 'GET',
                        url: `https://serverest.dev/usuarios/${usuarioId}`,
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        },
                    failOnStatusCode: false
                    }).then((getDeletedResponse) =>
                    {
                        expect(getDeletedResponse.status).to.equal(400);
                        expect(getDeletedResponse.body.message).to.equal('Usuário não encontrado');
                    });
                })
            })
        })
    })
})