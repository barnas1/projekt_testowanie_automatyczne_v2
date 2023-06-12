/// <reference types="cypress" />
import searchquery from './../fixtures/users.json'

it('rejetarcja z wykorzystaniem powiązanego email z instenijącym kontem', () => {
  cy.visit('/');
  cy.url().should('contain', 'fakestore');
  cy.get('.woocommerce-store-notice__dismiss-link').click();
  cy.get('#menu-item-201 > a').click();
  cy.get('#reg_email').clear().type(searchquery[1].email);
  cy.get('#reg_password').clear().type(searchquery[1].password);
  cy.get('.woocommerce-Button').click();
  cy.get('.woocommerce-error').should('be.visible');
})
