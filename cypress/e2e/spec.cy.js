describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit("http://127.0.0.1:4000");
        cy.wait(5000);
    })
    it(
        'Should clear input field after adding a new todo', () => {
            cy.visit("http://127.0.0.1:4000")
            cy.get('#new-todo-field').type('test')
            cy.get('#new-todo-button').click()
            cy.get('#new-todo-field').should("have.value", "")
        }
    )
})