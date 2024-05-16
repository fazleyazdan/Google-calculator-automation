class Digits
{
    zero() 
    {
        cy.get("[jsname='bkEvMb']").scrollIntoView().click({ force: true }).wait(500);
    }

    one() 
    {
        cy.get("[jsname='N10B9']").scrollIntoView().click({ force: true }).wait(500);
    }
    two() 
    {
        cy.get("[jsname='lVjWed']").scrollIntoView().click({ force: true }).wait(500);
    }
    three() 
    {
        cy.get("[jsname='KN1kY']").scrollIntoView().click({ force: true }).wait(500);
    }
    four() 
    {
        cy.get("[jsname='xAP7E']").scrollIntoView().click({ force: true }).wait(500);
    }
    five() 
    {
        cy.get("[jsname='Ax5wH']").scrollIntoView().click({ force: true }).wait(500);
    }
    six() 
    {
        cy.get("[jsname='abcgof']").scrollIntoView().click({ force: true }).wait(500);
    }
    seven() 
    {
        cy.get("[jsname='rk7bOd']").scrollIntoView().click({ force: true }).wait(500);
    }
    eight() 
    {
        cy.get("[jsname='T7PMFe']").scrollIntoView().click({ force: true }).wait(500);
    }
    nine() 
    {
        cy.get("[jsname='XoxYJ']").scrollIntoView().click({ force: true }).wait(500);
    }
    inputField() 
    {
        cy.get('span[jsname="VssY5c"]').should('have.text', '1234567890');
    }

}

export default Digits