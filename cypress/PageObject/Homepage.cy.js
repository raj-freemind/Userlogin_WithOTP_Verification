class Homepage {
    visit() {
        cy.visit('https://gumpadmindev.genesesolution.com/')
        cy.title().should('eq', 'GUMP - Admin')
        
    }

    SendEmail(email) {
        cy.get('.mb-5 > .ant-input').type(email)
    }

    SendPassport(passport) {
    cy.get('.ant-input-affix-wrapper > .ant-input').type(passport)
    }
    AddClick() {
        cy.get('.ant-btn').click()
    }
    
    VerifyaddResult(resultvalue) {
        cy.get('#result').should('have.text', "Result: " + resultvalue)
        //we can use different type of assertion in here 
    }
    


}
export default Homepage