// <reference types="cypress" />


describe('navigation test', () => {
  const tickers = ['AAPL', 'GOOG', 'TSLA', 'AMZN', 'MSFT']

  beforeEach(() => {
    cy.visit('/')
  })

  it('displays all stock tickers', () => {
    tickers.forEach(ticker => {
      cy.get(`[data-testid="stock-link-${ticker}"]`).should('be.visible')
    })
  })

  it('opens StockInfo when AAPL is clicked', () => {
    cy.get('[data-testid="stock-link-AAPL"]').click()
    cy.get(`[data-testid="stock-details"]`).should('be.visible').and('contain', 'AAPL')
  })

  tickers.forEach(ticker => {
    it(`opens StockInfo when ${ticker} is clicked`, () => {
      cy.get(`[data-testid="stock-link-${ticker}"]`).click()
      cy.get(`[data-testid="stock-details"]`).should('be.visible').and('contain', ticker)
    })
  })
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

