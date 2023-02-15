describe('movie-selector', () => {
  it('should show paginator when searched', () => {
    cy.visit('/')
    cy.get('form').within(() => {
      cy.get('input[name="search"]').type('Avatar')
    })
    cy.get('[data-cy="paginator-div"]').should('exist')
  })
})