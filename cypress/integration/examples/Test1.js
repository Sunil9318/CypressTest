//cypress- Spec
/// <reference types="Cypress" />

describe('My First Test', function()  {
    it('Does not do much!', function()  {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product').should('have.length',5)
      cy.get('.product:visible').should('have.length',4)
      cy.get('.products').find('.product').should('have.length',4)
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

      cy.get('.products').find('.product').each(($e1, index, $list) => {
    
        const textVeg=$e1.find('h4.product-name').text();
        if(textVeg.includes('Cashews'))
        {
            cy.wrap($e1).find('button').click();
        }
    })
    console.log('Test')
    cy.get('.brand').should('have.text','GREENKART')
    cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())
    })
})

})


//console.log(logo.text)