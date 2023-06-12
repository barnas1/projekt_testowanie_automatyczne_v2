/// <reference types="cypress" />


it('zamknięcie okna pop-up', () => {
  cy.visit('/');
  cy.url().should('contain', 'fakestore');
  cy.get('.woocommerce-store-notice__dismiss-link').should('be.visible');
  cy.get('.woocommerce-store-notice__dismiss-link').click();
  cy.get('.woocommerce-store-notice__dismiss-link').should('not.be.visible');
})
