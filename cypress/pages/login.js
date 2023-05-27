// Login page

class loginPage{

    elements ={
        // input field
        emailField: () => cy.get('input[name="emailInput"]'),
        passwordField : () => cy.get('input[name="passwordInput"]'),
        // buttons
        signin : () => cy.get('button.submit-button')
    }

}


module.exports = new loginPage();