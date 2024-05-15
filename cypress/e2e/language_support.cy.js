import pageObject from "../page_objects/elements_page"
import Digits from "../page_objects/numeric"


// Test Cases for language support. 
// here i have executed positive & negative test cases but this time i have changed the language to 'Urdu'

describe('Language support test suit', ()=> {

    // Objects for using elements from page object model
    let signs = new pageObject()
    let numbers = new Digits()

    beforeEach('visit site', ()=> {

        // Visit google.com
        cy.visit('https://www.google.com')

        cy.wait(1000)
        // change language to 'Urdu'
        cy.get("#SIvCob>a:first-child").click()

        // navigate to google calculator
        cy.get("#APjFqb").type('Google calculator{Enter}')
        cy.wait(2500)
        
    })

    // check whether 7+3 = 10
    it('For addition', ()=>{

        cy.wait(2500)
        numbers.seven()
        signs.add()
        numbers.three()
        signs.equal()

        // Assertion on results
        signs.resultField(10)
        cy.wait(2000)
    })

    // check whether 7-3 = 4
    it('For subtraction', ()=>{

        cy.wait(2500)
        numbers.seven()
        signs.subtract()
        numbers.three()
        signs.equal()

        // Assertion on results
        signs.resultField(4)
        cy.wait(2000)
    })


// check whether 10 / 2 = 5
    it('For Division', ()=>{

        cy.wait(2500)
        numbers.one()
        numbers.zero()
        signs.divide()
        numbers.two()
        signs.equal()

        // Assertion on results
        signs.resultField(5)
        cy.wait(2000)
    })

    
})

