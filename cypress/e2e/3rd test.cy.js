/// <reference types="cypress" />

it('przejście do zakładki moje konto', () => {
  cy.visit('/');
  cy.url().should('contain', 'fakestore');
  cy.get('.woocommerce-store-notice__dismiss-link').click()
  cy.get('#menu-item-201 > a').click()
  cy.url().should('contain', 'moje-konto');
})