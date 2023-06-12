/// <reference types="cypress" />
import searchquery from './../fixtures/search.json'

it('wyszukanie frazy "wspinaczka" na stronie', () => {
  cy.visit('/');;
  cy.url().should('contain', 'fakestore');
  cy.get('#woocommerce-product-search-field-0').click().clear().type(searchquery[1].fraza).type("{enter}");
  cy.url().should("contain", "?s=wspinaczka");

})