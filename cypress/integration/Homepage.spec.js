const Homepage = require('../support/pages/Homepage');
const HomepageData = require('../support/datatest/HomepageData');
let homepage = new Homepage();

describe('BDD Atlas',()=>{

    it('Visit BDD Atlas Web', () => {
        homepage.visit('');
    });

    it('Type a Quote', () => {
        homepage.type_quote(HomepageData.datatest.quote);
    });

    it('Select Color', () => {
        homepage.choose_colour(HomepageData.datatest.quote_colour);
    });

    it('Submit Quote', () => {
        homepage.submit_quote(HomepageData.datatest.quote, HomepageData.datatest.quote_colour);
    });

    it('Clear specific quote', () => {
        homepage.clear_quote('coba');
    });
});