beforeEach(() => {
  cy.visit("http://localhost:3001")
});

describe('User opens app and sees title', () => {
  it('Visits the app home page', () => {
    cy.visit('http://localhost:3001')
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
  it('Cards should get larger when mouse is hovering over them', () => {
    cy.get(".card.fade-in").each(($card) => {
      cy.wrap($card).should("have.css", "opacity", "1"); 
      cy.wrap($card).trigger("mouseover", {force: true});
    });
  });
})

describe('Display movie details', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: './movies.json'
    }).as('/');
  });

  it('Should get a successful 200 code on loadup', () => {
    cy.get('h1').contains('Rancid Tomatillos')
    // 200 error code testing
  });

  it('should give an error message for a 502 status code', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 502,
      body: 'Some error message'
    }).as('getMovieDetails');

    cy.visit('http://localhost:3001');
    // 502 error code testing
  });
});


describe('Display errors', () => {
  it('should give an error message for a 404 status code', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      fixture: "movie_details.json"
    })
    .as('getMovieData')
    cy.visit('http://localhost:3001/fakepath')
    cy.wait('@getMovieData')
    cy.get('.error-message')
    .contains(`404 Page Not Found: This Page Doesn't Exist`);
  });

  it('should give an error message for a 502 status code', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      fixture: "movie_details.json"
    })
    .as('fetchMovieData')
    cy.visit('http://localhost:3001/')
    cy.wait('@fetchMovieData')
    cy.get('.error-message')
    .contains(`The server is down. Please try again later.`);
  });
})
