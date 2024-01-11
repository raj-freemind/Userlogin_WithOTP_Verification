describe('Load Home Paage', () => {
  it('passes', () => {
    cy.visit('https://gumpadmindev.genesesolution.com/')
    cy.title().should('eq', 'GUMP - Admin')
    cy.get('.mb-5 > .ant-input').type("manmohan@varosatech.com")
    cy.get('.ant-input-affix-wrapper > .ant-input').type("Myhouse@124")
    cy.get('.ant-btn').click()
    
  })
})