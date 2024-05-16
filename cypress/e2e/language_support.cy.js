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
        cy.wait(500)
        cy.viewport(1280, 800);

        // change language
        cy.get("#SIvCob>a:first-child").click()

        // navigate to google calculator
        cy.get("#APjFqb").type('Google calculator{Enter}')
        cy.wait(500)        
    })

    // check whether 7+3 = 10
    it('For addition', ()=>{

        cy.get('.ULSxyf>.MjjYud>.Ww4FFb', { timeout: 5000 }).should('exist');
        cy.wait(500)
        numbers.seven()
        signs.add()
        numbers.three()
        signs.equal()

        // Assertion on results
        signs.resultField(10)
    })

    // check whether 7-3 = 4
    it('For subtraction', ()=>{

        cy.get('.ULSxyf>.MjjYud>.Ww4FFb', { timeout: 5000 }).should('exist');
        cy.wait(500)
        numbers.seven()
        signs.subtract()
        numbers.three()
        signs.equal()

        // Assertion on results
        signs.resultField(4)
    })


// check whether 10 / 2 = 5
    it('For Division', ()=>{

        cy.get('.ULSxyf>.MjjYud>.Ww4FFb', { timeout: 5000 }).should('exist');
        cy.wait(500)
        numbers.one()
        numbers.zero()
        signs.divide()
        numbers.two()
        signs.equal()

        // Assertion on results
        signs.resultField(5)
    })

    
})

