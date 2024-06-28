//cypress- Spec
/// <reference types="Cypress" />

describe('My First Test', function()  {
    it('Does not do much!', function()  {

        const monthNum = "6";
        const date= "15";
        const year="2027";
        const expectedList= [monthNum,date,year];
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
      cy.get('.react-date-picker__calendar-button').click();
      cy.get('.react-calendar__navigation__label').click();
      cy.get('.react-calendar__navigation__label').click();
      cy.contains('button',year).click();
      cy.get('.react-calendar__year-view__months__month').eq(Number(monthNum)-1).click();
      cy.contains('abbr',date).click();

      //expectedList
      cy.get('.react-date-picker__inputGroup__input').each(($el,index) =>
      {
        cy.wrap($el).invoke('val').should('eq',expectedList[index])
      })
    
    //   cy.get('.react-date-picker__inputGroup__day').should('have.value',date);
    //   cy.get('.react-date-picker__inputGroup__month').should('have.value',monthNum);
    //   cy.get('.react-date-picker__inputGroup__year').should('have.value',year);
    })

})