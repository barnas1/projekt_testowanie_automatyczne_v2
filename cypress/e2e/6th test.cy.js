/// <reference types="cypress" />

it('przejście do zakładki sklep', () => {
  cy.visit('/');
  cy.url().should('contain', 'fakestore');
  cy.get('.woocommerce-store-notice__dismiss-link').click();
  cy.get('#menu-item-198 > a').click();
  cy.url().should('contain', 'shop');
})