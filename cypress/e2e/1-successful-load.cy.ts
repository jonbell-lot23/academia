describe('Academia load test', () => {
  it('should load academia project successfully', () => {
    // Hard-code to localhost:3000
    const baseURL = 'http://localhost:3000';
    
    // Go to the home page
    cy.visit(baseURL);
  });
});

export {}