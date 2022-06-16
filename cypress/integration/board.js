/// <reference types="cypress" />

const { BoardPage } = require("../support/pages/pages")

const boardPage = new BoardPage()

describe('Board feature', () => {
  beforeEach('it opens the url', () => {
    cy.visit("http://localhost:3000/")
    cy.component('board-collection')
      .then(collection => {
        collection.newBoardInputActive = true
        collection.newBoardTitle = "new board"
        collection.createNewBoard()
      })
  });

  it('create a new list', () => {
    let listName = "New list"
    cy.location('pathname', { timeout: 10000 })
      .should('include', '/board')
    cy.component('vue-component-6-board')
      .then(board => {
        board.newListInputActive = true
        board.newListTitle = listName
      })
    boardPage.clickSaveButton()
    cy.get(boardPage.listNameField)
      .should("have.value", listName);
  })

  it('edit list', () => {
    cy.location('pathname', { timeout: 10000 })
      .should('include', '/board')
    cy.component('vue-component-6-board')
      .then(board => {
        board.newListInputActive = true
        board.newListTitle = "new list"
        cy.get(boardPage.saveButton)
          .should("be.visible")
        cy.component('vue-component-6-board')
          .then(board => {
            board.addList()
          })
        boardPage.writeListName("List edited")
        cy.get(boardPage.listNameField)
          .should("have.value", "List edited");

      })
  })

  it('cancel editing list', () => {
    cy.location('pathname', { timeout: 10000 })
      .should('include', '/board')
    cy.component('vue-component-6-board')
      .then(board => {
        board.newListInputActive = true
        board.newListTitle = "new list"
        boardPage.clickCancelButton()
        cy.get(boardPage.addListButton)
          .should("be.visible")
      })
  })


  it('add a task', () => {
    cy.location('pathname', { timeout: 1000 })
      .should('include', '/board')
    cy.component('vue-component-6-board')
      .then(board => {
        board.newListInputActive = true
        board.newListTitle = "new list"
        cy.get(boardPage.saveButton)
          .should("be.visible")
        cy.component('vue-component-6-board')
          .then(board => {
            board.addList()
          })
        boardPage.clickNewTaskButton()
        boardPage.writeTaskName("new task")
        cy.get(boardPage.taskName).should('have.text', "new task")
      })
  })

  it('edit board title', () => {
    boardPage.writeBoardTitle("board title edited")
    cy.get(boardPage.boardtitleField)
      .should("have.value", "board title edited")
  })

  it('delete board', () => {
    cy.location('pathname', { timeout: 10000 })
      .should('include', '/board')
    cy.component('vue-component-6-board')
      .then(board => {
        board.boardDropdown = true
        boardPage.clickDeleteButton()
      })
  })

  it('complete task', () => {
    cy.location('pathname', { timeout: 1000 })
      .should('include', '/board')
    cy.component('vue-component-6-board')
      .then(board => {
        board.newListInputActive = true
        board.newListTitle = "new list"
        cy.get(boardPage.saveButton)
          .should("be.visible")
        cy.component('vue-component-6-board')
          .then(board => {
            board.addList()
          })
        boardPage.clickNewTaskButton()
        boardPage.writeTaskName("new task")
        cy.get(boardPage.taskName).should('have.text', "new task")
        boardPage.completeTask()
        cy.get(boardPage.taskCheckbox)
          .should("be.checked")
      })
  })
  // after('log out from the system', () => {
  //   cy.component('root')
  //     .then(app => {
  //       app.resetAll()
  //     })

  // })

})

