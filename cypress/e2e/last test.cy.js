/// <reference types="cypress" />
import searchquery from './../fixtures/search.json'

it('dodanie do koszyka wszystkich dostępnych ilości wczasów w Toskani ', () => {
    cy.visit('/');
    cy.url().should('contain', 'fakestore');
    cy.get('#menu-item-198 > a').click();
    cy.get('.last > a > .woocommerce-loop-category__title').click();
    cy.get('.post-64 > .woocommerce-LoopProduct-link > .woocommerce-loop-product__title').click();
    cy.get("[name='quantity'").click().clear().type(searchquery[0].liczba);
    cy.get('.single_add_to_cart_button').click();
    cy.get('.woocommerce-message').should('be.visible');
})