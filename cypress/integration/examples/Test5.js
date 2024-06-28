/// <reference types="Cypress" />

describe('My First Test Cypress child window', function()  {
    it('Handling child window', function()  {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('#opentab').invoke('removeAttr', 'target').click();
      
      cy.origin('https://www.qaclickacademy.com', () => 
      {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".col-lg-12 h2").should('contain','About Us');
      })
      
})

})