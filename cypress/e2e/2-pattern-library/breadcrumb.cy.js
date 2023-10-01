describe("Breadcrumb functionality", () => {
  const baseUrl = Cypress.env("BASE_URL") || "http://localhost:3000"; // Fallback to localhost if env variable not set

  beforeEach(() => {
    // Visit the base URL
    cy.visit(baseUrl);
  });

  it("should track navigation", () => {
    // Click on a link
    cy.get(".tracked-link").first().click();

    // Check that the breadcrumb display has been updated
    cy.get("ul").children().should("have.length", 1);
  });

  it("should clear breadcrumbs", () => {
    // Click on a few links
    cy.get(".tracked-link").first().click();
    cy.get(".tracked-link").eq(1).click();

    // Clear the breadcrumbs
    cy.get("button").contains("Clear Breadcrumbs").click();

    // Check that the breadcrumb display is empty
    cy.get("ul").children().should("have.length", 0);
  });
});
