class textPage
{
    equalExist() 
    {
        cy.get("[jsname='Pt8tGc']").should('have.text', '=')
    }

    addExist()

    {
        cy.get("[jsname='XSr6wc']").should('have.text', '+')
    }

    subtractExist()

    {
        cy.get("[jsname='pPHzQc']").should('have.text', '−')
    }

    multiplyExist()
    {
        cy.get("[jsname='YovRWb']").should('have.text','×')
    }

    divideExist()
    {
        cy.get("[jsname='WxTTNd']").should('have.text', '÷')
    }

    clearButtonExist()
    {
        cy.get("[jsname='SLn8gc']").should('have.text', 'AC')
    }

    decimalButtonExist()
    {
        cy.get("[jsname='YrdHyf']").should('be.visible')
    }


    zeroExist()
    {
        cy.get("[jsname='bkEvMb']").should('have.text', '0')
    }

    oneExist()
    {
        cy.get("[jsname='N10B9']").should('have.text', '1')
    }

    twoExist()
    {
        cy.get("[jsname='lVjWed']").should('have.text', '2')
    }

    threeExist()
    {
        cy.get("[jsname='KN1kY']").should('have.text', '3')
    }

    fourExist()
    {
        cy.get("[jsname='xAP7E']").should('have.text', '4')
    }

    fiveExist()
    {
        cy.get("[jsname='Ax5wH']").should('have.text', '5')
    }

    sixExist()
    {
        cy.get("[jsname='abcgof']").should('have.text', '6')
    }

    sevenExist()
    {
        cy.get("[jsname='rk7bOd']").should('have.text', '7')
    }

    eightExist()
    {
        cy.get("[jsname='T7PMFe']").should('have.text', '8')
    }

    nineExist()
    {
        cy.get("[jsname='XoxYJ']").should('have.text', '9')

    }
}

export default textPage
