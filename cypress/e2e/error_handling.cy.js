describe("error handling", () => {

  it("should display an error message if a client error occurs", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404, 
      body: " "
    })
      cy.visit("http://localhost:3000")
      cy.get(".error-message").contains("Error: Click Title to Navigate Back to Home Page")
    })
  it("should display an error message if a server error occurs", () => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
        statusCode: 500, 
        body: " "
    })  
      cy.visit("http://localhost:3000")
      cy.get(".error-message").contains("Error: Click Title to Navigate Back to Home Page")
   })
  it("should load the page and return a 200 status code", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200, 
      fixture: "movies.json"
  })  
    cy.visit("http://localhost:3000")
    cy.get("h1").contains("Rancid Tomatillos")
 })
})