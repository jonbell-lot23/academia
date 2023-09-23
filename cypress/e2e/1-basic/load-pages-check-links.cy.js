describe("Page and Links Check", () => {
  const baseUrl = Cypress.env("BASE_URL") || "http://localhost:3000"; // Fallback to localhost if env variable not set
  const pages = [
    "/",
    "/thesis",
    "/journal",
    "/a-pattern-library/about-the-library",
  ].map((page) => `${baseUrl}${page}`);

  pages.forEach((page) => {
    it(`successfully loads ${page} and has no broken links`, () => {
      // Page Loading
      cy.visit(page);

      // Links Check
      cy.get("a").each(($a) => {
        const href = new URL($a.prop("href"));
        const fullUrl = `${baseUrl}${href.pathname}${href.search}${href.hash}`;
        cy.request(fullUrl).its("status").should("eq", 200);
      });
    });
  });
});
