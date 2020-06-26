/// <reference types="cypress" />

describe('Main page', () => {
    before(() => {
        if (Cypress.env('PRODUCTION'))
            cy.visit('https://nicholemattera.com/')
        else
            cy.visit('http://localhost:3000/')
    })

    it('has title', () => {
        cy.contains('Nichole Mattera')
    })

    it('has subtitle', () => {
        cy.contains('Mobile, Full-Stack Web, and Switch Homebrew Developer')
    })

    it('has social links', () => {
        cy.get('a[data-cy=social-btn]')
            .should('have.length', 3)
            .and('have.attr', 'target', '_blank')
    })

    it('has resume link', () => {
        cy.get('a[data-cy=resume-btn]')
            .should('have.length', 1)
            .and('contain', 'View Resume')
            .and('have.attr', 'target', '_blank')
    })
})