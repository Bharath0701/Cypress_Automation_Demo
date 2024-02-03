class BasePage
{
    validatetext(element, expText)
    {
        cy.get(element).should('have.text', expText)
    }

    validateValue(element, expText)
    {
        cy.get(element).should('have.value', expText)
    }

    validateElementVisible(element)
    {
        cy.get(element, { timeout: 5000 } ).should('be.visible')
    }
}

export default BasePage;