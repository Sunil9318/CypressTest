/// <reference types="Cypress" />
import HomePage from "../PageObjects/HomePage";
describe('My First framework Test', function()  {
before(function() {
    cy.fixture('example').then(function(data){
        this.data=data;
    })
})

    it('creating first framework', function()  {
        const homePage = new HomePage();
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        cy.get("input[name='name']:nth-child(2)").type(this.data.name);
        cy.get('select').select(this.data.gender);
        cy.get("input[name='name']:nth-child(2)").should('have.value',this.data.name)
        cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click();
        this.data.productName.forEach(element => {
            cy.selectProduct(element);
        });
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.contains('Checkout').click();
        cy.get('#country').type('India');
        cy.get('.suggestions').click();
    })

})