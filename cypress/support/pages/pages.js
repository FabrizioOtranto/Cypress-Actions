export class CollectionPage {

    cancelButton = ('[data-cy="new-board-cancel"]')
    saveButton = ('[data-cy="new-board-create"]')

    clickSaveButton() {
        cy
            .get(this.saveButton)
            .click()
    }

    clickCancelButton() {
        cy.get(this.cancelButton).click()
    }
}

export class LoginPage {

    signUpButton = ("button[data-cy='signup']")
    logInButton = ("button[data-cy='login']")
    loggedUser = ('[data-cy="logged-user"]')

    clickSignUpButton() {
        cy
            .get(this.signUpButton)
            .click()
    }
    clickLogInButton() {
        cy
            .get(this.logInButton)
            .click()
    }

}

export class BoardPage {
    saveButton =  ('[data-cy="save"]')
    listNameField = ('[data-cy="list-name"]')
    cancelButton = ('[data-cy="cancel"]') 
    addListButton = ("[data-cy='add-list']")
    newTaskButton = ("[data-cy='new-task']")
    newTaskField = ("[data-cy='task-input']")
    taskName = ('[data-cy="task-title"]')
    boardtitleField = ('[data-cy="board-title"]')
    deleteButton = ('[data-cy="board-options"] #myDropdown .delete')
    taskCheckbox = ('[data-cy="task-done"]')

    clickSaveButton() {
        cy
            .get(this.saveButton)
            .click()
    }

    writeListName(listName) {
        cy
        .get(this.listNameField)
        .clear()
        .type(listName)
        .type("{enter}")
    }

    clickCancelButton(){
        cy
        .get(this.cancelButton)
        .click()
    }

    clickNewTaskButton(){
        cy
        .get(this.newTaskButton)
        .click()
    }

    writeTaskName(task) {
        cy
        .get(this.newTaskField)
        .clear()
        .type(task).type("{enter}")
    }

    writeBoardTitle(boardTitle){
        cy.get(this.boardtitleField)
        .clear()
        .type(boardTitle)
        .type("{enter}")
    }

    clickDeleteButton(){
        cy
        .get(this.deleteButton)
        .click()
    }

    completeTask(){
        cy
        .get(this.taskCheckbox)
        .check()
    }

}