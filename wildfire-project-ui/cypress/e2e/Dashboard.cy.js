describe('Dashboard Test', () => {
  it('Testing the Telus dashboard Page', () => {
    const response = {
      "status": "success",
      "message": "Wildfires Data",
      "data": [
        {
          "wildfireName": "Wildfire - Stewart Crossing, Yukon - Canada",
          "country": "CAN"
        },
        {
          "wildfireName": "Wildfires - Alhue Commune (Alhue Fire), Chile",
          "country": "CHL"
        }
      ]
    };
    cy.stubGetWildFireDataApi({
      response: response,
    });
    cy.visit('http://localhost:8081');
    cy.get('[data-test="btn-submit"]').should("be.enabled");
    cy.get('[data-test="month-select"]').parent()
    .click();
    cy.get('div').contains('Mar').click({ force: true });
    cy.get('[data-test="year-slider"]').parent()
    .click();
   })
})