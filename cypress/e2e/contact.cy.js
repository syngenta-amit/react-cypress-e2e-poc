describe("Contact Page", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("submits contact form successfully", () => {
    cy.get('[data-cy="contact-name"]').type("John Doe");
    cy.get('[data-cy="contact-email"]').type("john@example.com");
    cy.get('[data-cy="contact-message"]').type("This is a test message.");
    cy.get('[data-cy="contact-submit"]').click();

    cy.get('[data-cy="contact-success"]').should("be.visible");
  });
});
