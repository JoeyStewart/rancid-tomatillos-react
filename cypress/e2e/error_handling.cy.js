describe("should show movie details", () => {
  it("should display an error message", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200, 
      fixture: "movies.json"
    })
      // need an alias for intercept, can create variable name, should it be a function?
      cy.visit("http://localhost:3000/potato")
      cy.get(".error-message").contains("Error: Page Does Not Exist, Click Title to Navigate Back to Home Page")
      cy.visit("http://localhost:3000/694919/potato")
      cy.get(".error-message").contains("Error: Page Does Not Exist, Click Title to Navigate Back to Home Page")
  })
})