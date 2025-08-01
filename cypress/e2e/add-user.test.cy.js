describe("Add User Page", () => {
  beforeEach(() => {
    cy.visit("/add-user");
  });

  it("should fill the form and add a user", () => {
    cy.get("[data-cy=input-name]").type("John Doe");
    cy.get("[data-cy=input-email]").type("john@example.com");
    cy.get("[data-cy=submit-button]").click();

    cy.get('[data-cy="nav-user-list"]').click();
    cy.get("[data-cy=user-list]").should("exist");
    cy.get("[data-cy=user-item-0]").should("contain", "John Doe");
  });
});
