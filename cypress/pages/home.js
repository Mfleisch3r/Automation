// Home page

class homePage{

    elements ={
        // Search tabs
        buyTab: () => cy.get('a[data-rf-test-name="searchTab"]'),
        rentTab: () => cy.get('a[data-rf-test-name="rentTab"]'),
        sellTab: () => cy.get('a[data-rf-test-name="sellerConsultationTab"]'),
        // Fields 
        searchField: () => cy.get('#search-box-input'),
        // Buttons 
        searchButton: () => cy.get('button[data-rf-test-name="searchButton"]'),
    }

}

module.exports = new homePage();