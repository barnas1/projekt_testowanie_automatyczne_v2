/// <reference types="cypress" />

it('dodanie kodu rabatowego podczas finalizacji zakupu', () => {
  cy.visit('/');
  cy.url().should('contain', 'fakestore');
  cy.get('.woocommerce-store-notice__dismiss-link').click();
  cy.get('#menu-item-198 > a').click();
  cy.get(':nth-child(1) > a > .woocommerce-loop-category__title').click();
  cy.get('.post-391 > .button').click();
  cy.get('.added_to_cart').click();
  cy.get('.checkout-button').click();
  cy.get('.showcoupon').click()
  cy.get('#coupon_code').clear().type('example');
  cy.get('.form-row-last > .button').click();
  cy.get('.woocommerce-error').should('be.visible');
})