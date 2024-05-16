class pageObject
{
    equal() 
    {
        cy.get("[jsname='Pt8tGc']").click({ force: true });
    }

    add()

    {
        cy.get("[jsname='XSr6wc']").click({ force: true });
    }

    subtract()

    {
        cy.get("[jsname='pPHzQc']").click({ force: true })
    }

    multiply()
    {
        cy.get("[jsname='YovRWb']").click({ force: true })
    }

    divide()
    {
        cy.get("[jsname='WxTTNd']").click({ force: true })
    }

    clearButton()
    {
        cy.get("[jsname='SLn8gc']").click({ force: true })
    }

    decimalButton()
    {
        cy.get("[jsname='YrdHyf']").click({ force: true })
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
        cy.get("[jsname='j93WEe']").click({ force: true })
    }
}


export default pageObject
