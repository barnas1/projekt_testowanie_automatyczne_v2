/// <reference types="cypress" />

it('dodaj do koszyka gracja-lumos, następnie przejdź do koszyka', () => {
  cy.visit('/');
  cy.url().should('contain', 'fakestore');
  cy.get('.woocommerce-store-notice__dismiss-link').click();
  cy.get('#menu-item-198 > a').click();
  cy.get(':nth-child(1) > a > .woocommerce-loop-category__title').click();
  cy.get('.post-391 > .button').click();
  cy.get('.added_to_cart').should('be.visible').click();
  cy.url().should('contain', 'koszyk');
})