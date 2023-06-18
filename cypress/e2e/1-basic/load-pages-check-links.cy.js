describe("Page and Links Check", () => {
  const pages = ["/", "/paper", "/diff", "/a-pattern-library/Last-Read"];

  pages.forEach((page) => {
    it(`successfully loads ${page} and has no broken links`, () => {
      // Page Loading
      cy.visit(page);

      // Links Check
      cy.get("a").each(($a) => {
        cy.request($a.prop("href")).its("status").should("eq", 200);
      });
    });
  });
});
