// <reference types="cypress" />

describe('navigation test', () => {
  const tickers = ['AAPL', 'GOOG', 'TSLA', 'AMZN', 'MSFT']

  beforeEach(() => {
    cy.visit('/')
  })

  it('displays all stock tickers on homepage', () => {
    tickers.forEach(ticker => {
      cy.get(`[data-testid="stock-link-${ticker}"]`).should('be.visible')
    })
  })

  tickers.forEach(ticker => {
    it(`navigates to ${ticker} details page and displays StockInfo`, () => {
      // wait until React is hydrated
      cy.get('[data-testid="hydrated-marker"]', { timeout: 10000 }).should('exist')

      //  wait for the card to be visible and clickable
      cy.get(`[data-testid="stock-link-${ticker}"]`, { timeout: 10000 })
        .should('be.visible')
        .click()

      // Wait a bit to let router update the URL
      cy.location('pathname', { timeout: 10000 }).should('include', `stock/${ticker}`);

      // Verify stock details are visible on the new page
      cy.get('[data-testid="stock-details"]', { timeout: 10000 })
        .should('be.visible')
        .and(($el) => {
          expect($el.text().toUpperCase()).to.include(ticker) // avoid case mismatch
        })

      // cy.get('[data-testid="stock-details"]', { timeout: 10000 })
      //   .should('be.visible')
      //   .and('contain', ticker);
    });
  });

})

describe('Menu test', () => {

  it('tests opening and closing sidebar menu when button', () => {

    cy.viewport(767, 700);
    cy.visit('/');

    cy.get('[data-testid="mobile-sidebar"]').should('not.be.exist');
    cy.get('[data-testid="open-sidebar-btn"]').should('be.exist').click();
    cy.get('[data-testid="mobile-sidebar"]').should('be.exist');
    cy.get('[data-testid="open-sidebar-btn"]').click();
    cy.get('[data-testid="mobile-sidebar"]').should('not.be.exist');

  });

  it('opens links in mobile menu = test navigation', () => {

    cy.viewport(767, 700);
    cy.visit('/');

    cy.get('[data-testid="open-sidebar-btn"]').should('be.exist').click();

    cy.get('[data-testid="mobile-sidebar"]').should('be.exist');

    cy.get('[data-testid="mobile-link-/"]').should('be.exist').click();

    cy.get('[data-testid="mobile-link-https://www.finance.yahoo.com"]').click();

    cy.visit('/');

    cy.get('[data-testid="open-sidebar-btn"]').should('be.exist').click();

    cy.get('[data-testid="mobile-link-https://www.datatailr.com"]')

      .should('have.attr', 'href', 'https://www.datatailr.com');

    cy.get('[data-testid="open-sidebar-btn"]').click();
  });

})

