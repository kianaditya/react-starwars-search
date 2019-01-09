describe('My First Test', function() {
    it('Visits Localhost',function() {
        cy.visit('/')
        cy.contains('Search Here')
        cy.contains('Name')
        cy.get('input')
            .type('luke')
            .should('have.value', 'luke')
    })
  })