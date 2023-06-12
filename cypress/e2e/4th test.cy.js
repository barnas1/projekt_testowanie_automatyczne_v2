/// <reference types="cypress" />
import searchquery from './../fixtures/users.json'

it('wpisanie niepoprawnych danych logowania', () => {
  cy.visit('/');
  cy.url().should('contain', 'fakestore');
  cy.get('.woocommerce-store-notice__dismiss-link').click();
  cy.get('#menu-item-201 > a').click();
  cy.get('#username').clear().type(searchquery[0].email);
  cy.get('#password').clear().type(searchquery[0].password);
  cy.get(':nth-child(3) > .woocommerce-button').click();
  cy.get('.woocommerce-error').should('be.visible');
})