/// <reference types="cypress" />

const { LoginPage } = require("../support/pages/pages")

const loginPage = new LoginPage()

const email = "fabryotranto@gmail.com"
const password = "12345"

describe('login feature', () => {

  beforeEach('it opens the url', () => {
    cy.visit("http://localhost:3000/")
    cy.component('root')
      .then(root => {
        root.showLoginModule = true
      })

  })

  it('register with valid credentials', () => {
    cy.component('Login')
      .then(login => {
        login.logSignSwitch()
        login.signupEmail = email
        login.signupPassword = password
      });
    cy
    loginPage.clickSignUpButton
    cy.get(loginPage.loggedUser)
      .should("contain.text", "Log out")
  })

  it('Check botton send email confirmation', () => {
    cy.component('Login')
      .then(login => {
        login.logSignSwitch()
        login.sendEmails = true
        cy.get('[data-cy="welcome-email-checkbox"]').
          should("be.checked")
      });
    cy
      .get("button[data-cy='signup']")
      .click()
    cy.get('[data-cy="logged-user"]')
      .should("contain.text", "Log out")
  })

  it('login with valid credentials', () => {
    cy.component('Login')
      .then(login => {
        login.loginEmail = email
        login.loginPassword = password
      });
    cy
    loginPage.clickLogInButton()
    cy.get(loginPage.loggedUser)
      .should("contain.text", "Log out")
  })

  it('login with invvalid username, valid password', () => {
    cy.component('Login')
      .then(login => {
        login.loginEmail = "invalid@gmail.com"
        login.loginPassword = password
      });
    cy.get(loginPage.loggedUser)


  })

  it('login with invvalid password, valid username', () => {
    cy.component('Login')
      .then(login => {
        login.loginEmail = email
        login.loginPassword = "InvalidPassword"
      });
    cy.get(loginPage.loggedUser)

  })

  after('Restore the app', () => {
    cy.component('root')
      .then(app => {
        app.resetAll()
      });

  })

})

