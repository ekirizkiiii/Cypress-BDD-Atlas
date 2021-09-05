describe('BDD Atlas',()=>{

    it('Visit BDD Atlas Web', () => {
        cy.visit('http://bdd.atlasid.tech/');
        cy.url().should('eq','http://bdd.atlasid.tech/');
    });

    it('Type a Quote', () => {
        cy.get('#inputQuote').type('coba coba text');
    });

    it('Select Color', () => {
        cy.get('#colorSelect').select('Blue');
    });

    it('Submit Quote', () => {
        cy.get('#buttonAddQuote').click();
    });

    it('Clear specific quote', () => {
        cy.contains('coba').click().should('not.exist');
    });
});