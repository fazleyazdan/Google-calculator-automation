class pageObject
{
    equal() 
    {
        cy.get("[jsname='Pt8tGc']").click();
    }

    add()

    {
        cy.get("[jsname='XSr6wc']").click({ scrollBehavior: false });
    }

    subtract()

    {
        cy.get("[jsname='pPHzQc']").click()
    }

    multiply()
    {
        cy.get("[jsname='YovRWb']").click()
    }

    divide()
    {
        cy.get("[jsname='WxTTNd']").click()
    }

    clearButton()
    {
        cy.get("[jsname='SLn8gc']").click()
    }

    decimalButton()
    {
        cy.get("[jsname='YrdHyf']").click()
    }

    resultField(result)

    {
        cy.get("[jsname='VssY5c']").should('have.text',result)

    }

    clearField()

    {
        cy.get("[jsname='zLiRgc']").clear()

    }

    openingBracket()

    {
        cy.get("[jsname='j93WEe']").click()
    }
}


export default pageObject
