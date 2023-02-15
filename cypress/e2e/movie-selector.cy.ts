describe('movie-selector', () => {
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie*',
    }).as('apiMovieDbSearchMovies')
    cy.intercept({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/*',
    }).as('apiMovieDbGetMovieDetails')
    cy.visit('/')

  })
  it('should fetch movies when searched and show paginator', () => {
    cy.get('[data-cy="paginator-div"]').should('not.exist')
    cy.get('input[name="search"]').type('Last of us')
    cy.wait('@apiMovieDbSearchMovies').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200)
    })
    cy.get('[data-cy="paginator-div"]').should('exist')
  })
  it('should fetch movie and open modal when clicking on movie picture on homepage', () => {
    cy.get('input[name="search"]').type('Avatar')
    cy.get('[data-cy="paginator-div"]').should('exist')
    cy.get('[data-cy="movie-grid"]').should('exist')
    cy.get('[data-cy="image"]').first().click()
    cy.wait('@apiMovieDbGetMovieDetails')
    cy.get('[data-cy="modal"]').should('be.visible')
  })
})