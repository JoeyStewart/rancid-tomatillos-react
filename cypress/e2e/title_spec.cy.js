beforeEach(() => {
  cy.visit("http://localhost:3000/")
});

describe('User opens app and sees title', () => {
  it('Visits the app home page', () => {
    cy.visit('http://localhost:3000/')
  })
  it("should have a title", () => {
    cy.get(".rancid").contains("h1", "Rancid Tomatillos")
  })
  it("should have a collection of movies", () => {
    cy.get(".movies-container").find(".card").should("have.length", 40)
  })
  it("should show movie details when one movie is clicked", () => {
    cy.get(".movies-container").find(".card").eq(0).click()
    .get(".tagline").contains("h4", "The world needed a hero. It got Black Adam.")
    .get(".selectedTitle").contains("h2", "Black Adam")
  })

})
