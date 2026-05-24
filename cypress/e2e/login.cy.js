describe('Login - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Should login with valid credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory')
    cy.get('.title').should('contain', 'Products')
  })

  it('Should show error with wrong password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrongpassword')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Epic sadface')
  })

  it('Should show error with empty fields', () => {
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })
})