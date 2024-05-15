class Digits
{
    zero()
    {
        cy.get("[jsname='bkEvMb']").click({ scrollBehavior: false }).wait(1000)
    }

    one()
    {
        cy.get("[jsname='N10B9']").click({ scrollBehavior: false }).wait(1000)    
    }

    two()
    {
        cy.get("[jsname='lVjWed']").click({ scrollBehavior: false }).wait(1000);
    }

    three()
    {
        cy.get("[jsname='KN1kY']").click({ scrollBehavior: false }).wait(1000);
    }

    four()
    {
        cy.get("[jsname='xAP7E']").click({ scrollBehavior: false }).wait(1000)
    }

    five()
    {
        cy.get("[jsname='Ax5wH']").click({ scrollBehavior: false }).wait(1000)
    }

    six()
    {
        cy.get("[jsname='abcgof']").click({ scrollBehavior: false }).wait(1000)
    }

    seven()
    {
        cy.get("[jsname='rk7bOd']").click({ scrollBehavior: false }).wait(1000);
    }

    eight()
    {
        cy.get("[jsname='T7PMFe']").click({ scrollBehavior: false }).wait(1000)
    }

    nine()
    {
        cy.get("[jsname='XoxYJ']").click({ scrollBehavior: false }).wait(1000)

    }
    inputField(){
        cy.get('span[jsname="VssY5c"]').should('have.text', '1234567890');
    }

}

export default Digits