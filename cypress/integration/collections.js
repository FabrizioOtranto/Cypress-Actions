/// <reference types="cypress" />

const { CollectionPage } = require("../support/pages/pages")

const collectionPage = new CollectionPage()

describe('Collection feature', () => {

  beforeEach('it opens the url', () => {
    cy.visit("http://localhost:3000/")

  })

  it('create a new collection/board', () => {
    cy.component('board-collection')
      .then(collection => {
        collection.newBoardInputActive = true
        collection.newBoardTitle = "new board"
        collectionPage.clickSaveButton()
        cy.location('pathname', { timeout: 1000 })
          .should('include', '/board')
      });
  });

  it('cancel creating a new collection/board', () => {
    cy.component('board-collection')
      .then(collection => {
        collection.newBoardInputActive = true
        collection.newBoardTitle = "new board"
        collectionPage.clickCancelButton()
        cy.get(collectionPage.cancelButton).should("not.be.visible")
      });
  });

  after('Restore the app', () => {
    cy.component('root')
      .then(app => {
        app.resetAll()
      });

  })

})

