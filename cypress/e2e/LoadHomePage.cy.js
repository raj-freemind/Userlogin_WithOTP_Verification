
import Homepage from "../PageObject/Homepage.cy"
import LoginTestData from "../fixtures/LoginTestData.json"


describe('Load Home Page', () => {
    it('successfully loads', () => {
        const log = new Homepage()
        log.visit()
        cy.title().should('eq', 'GUMP - Admin')
    })
})

describe('Login to the system', () => {
    const log = new Homepage()

    beforeEach(() => {
        log.visit()
        
    })
    //TestData has a test case data and we can added other test scenario
    LoginTestData.forEach((item) => {
        it(item.Test_case_name, () => {
            log.SendEmail(item.username)
            log.SendPassport(item.passport)
            log.AddClick()
            
            //log.VerifyaddResult(item.expect_result)
        })

    })
})

