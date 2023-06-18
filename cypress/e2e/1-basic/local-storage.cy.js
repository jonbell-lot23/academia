describe("LocalStorage", () => {
  it("stores and retrieves an item correctly", () => {
    const item = { key: "testKey", value: "testValue" };
    cy.window().then((window) => {
      window.localStorage.setItem(item.key, item.value);
    });
    cy.window()
      .its("localStorage")
      .invoke("getItem", item.key)
      .should("equal", item.value);
  });
});
