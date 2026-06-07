describe('CSDD Target Practice', () => {

  it('Navigates CSDD and handles the cross-origin login portal', () => {
    // 1. Start on the primary domain
    cy.visit('https://csdd.lv/'); 
    cy.get('.link-e-csdd > span').click();
    cy.contains('Autorizēties visām darbībām').click();

    const pCode = Cypress.env('PERSONAL_CODE');
    // 2. The page now redirects to vpm.viss.gov.lv. 
    // We wrap everything on this new domain inside cy.origin()
    cy.origin('https://vpm.viss.gov.lv', { args: { pCode } }, ({ pCode }) => {   
      cy.get('[type="checkbox"]').check({ force: true });   
      cy.contains('Smart-ID').click();
      cy.get('[name="NationalIdentityNumber"]').type(pCode);
      cy.contains('Authenticate').click();
    });
      cy.contains('Darbības ar transportlīdzekļiem').click();
      cy.contains('Izvēles numuri').click();
      const targetPlate = Cypress.env('TARGET_PLATE');
      cy.get('[type="text"]').eq(0).type(targetPlate);
      cy.contains('Meklēt').click();
    cy.pause();
  });

});