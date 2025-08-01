describe("Contact Page", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("successfully submits the contact form", () => {
    cy.intercept("POST", "**/posts", {
      statusCode: 200,
      body: { id: 101 },
    }).as("postSuccess");

    cy.get('[data-cy="contact-name"]').type("John Doe");
    cy.get('[data-cy="contact-email"]').type("john@example.com");
    cy.get('[data-cy="contact-message"]').type("Hello from Cypress!");

    cy.get('[data-cy="contact-submit"]').click();
    cy.wait("@postSuccess");

    cy.get('[data-cy="contact-success"]')
      .should("be.visible")
      .and("contain", "Thank you for your message!");
  });

  it("displays error on API failure (500 status)", () => {
    cy.intercept("POST", "**/posts", {
      statusCode: 500,
      body: {},
    }).as("postFail");

    cy.get('[data-cy="contact-name"]').type("Error Test");
    cy.get('[data-cy="contact-email"]').type("error@example.com");
    cy.get('[data-cy="contact-message"]').type("Trigger error");

    cy.get('[data-cy="contact-submit"]').click();
    cy.wait("@postFail");

    cy.get('[data-cy="contact-error"]')
      .should("be.visible")
      .and("contain", "Something went wrong.");
  });

  it("displays error on network failure", () => {
    cy.intercept("POST", "**/posts", {
      forceNetworkError: true,
    }).as("postNetworkFail");

    cy.get('[data-cy="contact-name"]').type("Network Error");
    cy.get('[data-cy="contact-email"]').type("network@example.com");
    cy.get('[data-cy="contact-message"]').type("Trigger network error");

    cy.get('[data-cy="contact-submit"]').click();
    cy.wait("@postNetworkFail");

    cy.get('[data-cy="contact-error"]')
      .should("be.visible")
      .and("contain", "Something went wrong.");
  });
});
