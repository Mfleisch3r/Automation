// Home page

class resultsPage{

    elements ={
        // Searched Tag
        searched: () => cy.get('div[data-rf-test-name="textContent"]'),
        // Filter
        priceFilter: () => cy.get('.desktopExposedPriceFilter'),
        typeFilter: () => cy.get('.desktopExposedPropertyTypeFilter'),
        bedbathFilter: () => cy.get('.desktopExposedBedsAndBathsContainer'),
        // Price filter menu
        priceRange: () => cy.get('input[data-rf-input-event-type="onInput"]'),
        DoneButton: () => cy.get('.CustomFilter__footer').contains('Done'),
        // Results Grid 
        address: () => cy.get('.collapsedAddress'),
        price: () => cy.get('.homecardV2Price'),
    }

}

module.exports = new resultsPage();