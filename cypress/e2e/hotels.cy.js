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

    it("fills in and submits the form", () => {
        cy.visit("http://localhost:3000");
        cy.get("a").first().click();

        cy.get("[data-cy=addReview]").click();
        cy.location("pathname").should("include", "new");

        cy.get("form").within(() => {
            cy.get("input[name=title]").type("Test review");
            cy.get("input[name=description]").type(
                "Is a test review by Cypress"
            );
            cy.get("input[name=rating]").type(4);
            cy.get("button").click();
        });
    });
});
