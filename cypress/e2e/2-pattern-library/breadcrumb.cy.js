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
    cy.get("ul")
      .children()
      .should(($children) => {
        expect($children.length).to.be.greaterThan(1);
      });
  });
});
