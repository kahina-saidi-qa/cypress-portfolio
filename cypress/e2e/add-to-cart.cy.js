describe('Shopping Cart - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Should add a product to cart', () => {
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  it('Should remove a product from cart', () => {
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('Should navigate to cart page', () => {
    cy.get('.inventory_item').first().find('button').click()
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')
    cy.get('.cart_item').should('have.length', 1)
  })
})