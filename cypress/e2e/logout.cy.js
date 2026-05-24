describe('Logout - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Should logout successfully', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').should('be.visible').click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('#login-button').should('be.visible')
  })
})