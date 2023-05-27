// import page object
import homePage from "../../pages/home"
import searchresults from "../../pages/searchresults";
import resultsPage from "../../pages/searchresults"

let testData;
describe('Redfin Tests', () => {
    // Grab testdata
    before('Read JSON data', () => {
        cy.fixture('/Redfin/testdata').then( data => {
            testData = data;
        })
    })

    // Use session in each test
    beforeEach('Activate session', () => {
        cy.session('login', () => {
            cy.login(testData.username, testData.password);
        })
        cy.visit('/');
    })

    it('Verify searched location', () => {
        // Click buy then search 
        homePage.elements.buyTab().click();
        homePage.elements.searchField().clear().type(testData.search);
        homePage.elements.searchButton().eq(0).click();

        // Verify test in search is same
        resultsPage.elements.searched().then( searched => {
            expect(testData.search).include(searched.text());
        })

        // Verify results
        resultsPage.elements.address().each( address => {
            expect(address.text()).include(testData.search);
        })
    })

    it('Verify price filtering', () => {
        // Click and set price filter
        searchresults.elements.priceFilter().click()
        searchresults.elements.priceRange().eq(0).clear().type(testData.minPrice)
        searchresults.elements.priceRange().eq(1).clear().type(testData.maxPrice)
        searchresults.elements.DoneButton().click()

        // Verify price results
        resultsPage.elements.price().each( price => {
            expect(Number(price.text())).within(testData.minPrice, testData.maxPrice)
        })
    })
})