describe("Cypress", () => {
    it("opens the app and clicks on a hotel", () => {
        cy.visit("http://localhost:3000");
        cy.get("a").first().click();
        cy.location("pathname").should("include", "hotel");
    });

    it("navigates to the form to add a review", () => {
        cy.visit("http://localhost:3000");
        cy.get("a").first().click();

        cy.get("[data-cy=addReview]").click();
        cy.location("pathname").should("include", "new");
    });
});
