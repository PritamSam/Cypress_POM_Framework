//Step 1

class ConfirmationPage
{   
    //Step 11
    submitFormDetails()
    {   //Step 12:
        // created custom commands in commands.js folder which can be used to wrap cypresss commands in one code and 
        cy.submitFormDetails()
        // cy.get('#country').type("India")
        // cy.get(".suggestions ul li a").click()
        // cy.get(".btn-success").click()
    }
    // Step 11
    getAlertMessage()
    {
        return cy.get(".alert-success")
    }
}
//Step 8.1
export default ConfirmationPage