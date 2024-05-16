import pageObject from "../page_objects/elements_page"
import Digits from "../page_objects/numeric"


// Test Suit for positive test cases of + , - , x & / 

describe('Positive test cases', ()=> {

    // Objects for using elements from page object model
    let signs = new pageObject()
    let numbers = new Digits()

    // statements which execute before every test
    beforeEach('visit site', ()=> {
        cy.visit("https://www.google.com/search?q=google+calculator")
        cy.viewport(1280, 800);
        cy.wait(600)
    })

    // check whether 7+3 = 10
    it('For addition', ()=>{

        numbers.seven()
        signs.add()
        numbers.three()
        signs.equal()

        // Assertion on results
        signs.resultField(10)
       
    })

    // check whether 7-3 = 4
    it('For subtraction', ()=>{

        numbers.seven()
        signs.subtract()
        numbers.three()
        signs.equal()

        // Assertion on results
        signs.resultField(4)
        
    })

    // check whether 11 x 7 = 77
    it('For Multiplication', ()=>{

        numbers.one()
        numbers.one()
        signs.multiply()
        numbers.seven()
        signs.equal()

        // Assertion on results
        signs.resultField(77)
        
    })

    // Check multiplication of numbers having decimal (5.7 x 5 = 28.5)
    it('For Multiplication [Decimal]', ()=>{

        numbers.five()
        signs.decimalButton()
        numbers.seven() 
        signs.multiply()
        numbers.five()
        signs.equal()

        // Assertion on results
        signs.resultField(28.5)
        cy.wait(1000)

        //click CE button to clear the result field
        signs.clearButton()
        
        // verify that result is cleared after clicking CE button
        signs.resultField(0)
        
    })    


// check whether 10 / 2 = 5
    it('For Division', ()=>{

        numbers.one()
        numbers.zero()
        signs.divide()
        numbers.two()
        signs.equal()

        // Assertion on results
        signs.resultField(5)
        
    })

    
})


// Test Suit for Negative test cases of + , - , x & / 

describe('Negative test cases', ()=> {

    // Objects for using elements from page object model
    let signs = new pageObject()
    let numbers = new Digits()

    beforeEach('visit site', ()=> {
        cy.visit("https://www.google.com/search?q=google+calculator")
        cy.viewport(1280, 800);
        cy.wait(600)
    })

    // check whether ( + ( = Error
    it('For addition', ()=>{

        signs.openingBracket()
        signs.add()
        signs.openingBracket()
        signs.equal()

        // Assertion on results
        signs.resultField('Error')
        // cy.wait(2000)
    })

    // check whether . - ( = Error
    it('For subtraction', ()=>{

        signs.decimalButton()
        signs.subtract()
        signs.openingBracket()
        signs.equal()

        // Assertion on results
        signs.resultField('Error')
        // cy.wait(2000)
    })

    // check whether 0 x . = Error
    it('For Multiplication', ()=>{

        numbers.zero()
        signs.multiply()
        signs.decimalButton()
        signs.equal()

        // Assertion on results
        signs.resultField('Error')
        // cy.wait(2000)
    })

    // check whether . / 7 = Error
    it('For Division', ()=>{

        signs.decimalButton()
        signs.divide()
        numbers.seven()
        signs.equal()

        // Assertion on results
        signs.resultField('Error')
        // cy.wait(2000)
    })

     // check whether Division by Zero gives 'Infinity'
     it('For Division', ()=>{

        numbers.eight()
        signs.divide()
        numbers.zero()
        signs.equal()

        // Assertion on results
        signs.resultField('Infinity')
        // cy.wait(2000)
    })

})