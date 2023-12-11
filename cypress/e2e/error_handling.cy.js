describe("error handling", () => {

  it("should display an error message if a client error occurs", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404, 
      fixture: "movies.json"
    })
      cy.visit("http://localhost:3000/potato")
      cy.get(".error-message").contains("Error: Click Title to Navigate Back to Home Page")
    })
  it("should display an error message if a server error occurs", () => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
        statusCode: 500, 
        fixture: "movies.json"
    })  
      cy.visit("http://localhost:3000/694919/potato")
      cy.get(".error-message").contains("Error: Click Title to Navigate Back to Home Page")
   })
//   it("should display an error message if there is no page to go to", () => {
//     cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
//       statusCode: 200, 
//       fixture: "movies.json"
//   })  
//     cy.visit("http://localhost:3000/694919/potato")
//     cy.get(".error-message").contains("Error: Click Title to Navigate Back to Home Page")
//  })
})

