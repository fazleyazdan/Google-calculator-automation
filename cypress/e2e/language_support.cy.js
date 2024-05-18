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
        cy.get("#APjFqb").type('Google calculator')
        cy.get("div[class='FPdoLc lJ9FBc'] input[name='btnK']").click()
        cy.wait(500)     
      
    })

    // check whether 7+3 = 10
    it('For addition', ()=>{

        cy.wait(1000)
        cy.xpath("//div[@role='button'][normalize-space()='7']").click()
        signs.add()
        cy.xpath("//div[@role='button'][normalize-space()='3']").click()
        signs.equal()

        // Assertion on results
        signs.resultField(10)
        
    })

    // check whether 7-3 = 4
    it('For subtraction', ()=>{

        cy.wait(1000)
        cy.xpath("//div[@role='button'][normalize-space()='7']").click()
        signs.subtract()
        cy.xpath("//div[@role='button'][normalize-space()='3']").click()
        signs.equal()

        // Assertion on results
        signs.resultField(4)
    })


// check whether 10 / 2 = 5
    it('For Division', ()=>{

        cy.wait(3000)
        cy.xpath("//div[@role='button'][normalize-space()='1']").click()
        cy.xpath("//div[@role='button'][normalize-space()='0']").click()
        signs.divide()
        cy.xpath("//div[@role='button'][normalize-space()='2']").click()
        signs.equal()

        // Assertion on results
        signs.resultField(5)
    })

    
})



