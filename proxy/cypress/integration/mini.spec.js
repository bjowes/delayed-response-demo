/// <reference types="Cypress" />

context('Minimal delayed response example', function () {
    beforeEach('Load main page', function () {
        cy.visit('http://localhost:5000');
    });

    it('Pass one - fast', function () {
        cy.get('h1').should('contain', 'Silly');
    });

    it('Pass two - slow', function () {
        cy.get('h1').should('contain', 'Silly');
    });
});