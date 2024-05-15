import textPage from "../page_objects/text_coverage"

describe('Text Coverage', ()=> {

    
    let allStrings = new textPage()

    // Test case for text/string Coverage
    it('assertion on text', ()=> {
        
        cy.visit("https://www.google.com/search?q=google+calculator")
        cy.wait(600)
        cy.get('.jfN4p').scrollIntoView()
        
        // check the elements are visible and contains the text they are intended to display
        allStrings.equalExist()
        allStrings.addExist()
        allStrings.subtractExist()
        allStrings.multiplyExist()
        allStrings.divideExist()
        allStrings.clearButtonExist()
        allStrings.decimalButtonExist()
        allStrings.zeroExist()
        allStrings.oneExist()
        allStrings.twoExist()
        allStrings.threeExist()
        allStrings.fourExist()
        allStrings.fiveExist()
        allStrings.sixExist()
        allStrings.sevenExist()
        allStrings.eightExist()
        allStrings.nineExist()

    })
})