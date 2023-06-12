/// <reference types="cypress" />

it('usunięcie pozycji z koszyka', () => {
    cy.visit('/');
    cy.url().should('contain', 'fakestore');
    cy.get('.woocommerce-store-notice__dismiss-link').click();
    cy.get('#menu-item-198 > a').click();
    cy.get(':nth-child(1) > a > .woocommerce-loop-category__title').click();
    cy.get('.post-391 > .button').click();
    cy.get('.added_to_cart').click();
    cy.get('.remove').click();
    cy.get('.cart-empty').should('be.visible');
})