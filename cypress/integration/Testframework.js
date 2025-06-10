//Step 2: Add data for login under fixtures/example.json

import HomePage from "../support/pageObjects/HomePage"

//Step 3 : Create a Folder where test cases will be executed
describe ('End To End E-Com Test',function()
{
    //hooks
    // Step 8 : added Hooks
   before(function(){
        cy.fixture('example').then(function(data)
        {
          this.data=data
          this.homepage =  new HomePage()
         })
    })


    it('E2E Test',function()
    {

        //Step 4: creating objects of homepage class in ProductPage.js
        //const homepage =  new HomePage()
       //Step 8.1 : HomePage is changed to this.homepage
        this.homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/#')
        //homepage.login(this.data.username,this.data.password)
        //Step 7.2 : Eliminating object creations by adding objects under common File for execution 
        const productpage = this.homepage.login(this.data.username,this.data.password)
        //cy.log(this.data.username) -> It will print username in console
        //cy.pause() -> It will pause the exceution for debugging and can be resumed through test runnr GUI
        //Step 7 : Instead of creating ProductPage objects in test file which is used more oftenly, we have added object in HomePage.js
        /* const productpage = new ProductPage()*/
        const productName = "Nokia Edge"
        
        //Step 6.1 : Add functions created in ProductPage.js
        productpage.pageValidation()
        //productpage.verifyCardLimit()
        //Step 8.4 Adding card count function to check length
        productpage.getCardCount().should('have.length',4)
        productpage.selectProduct(productName)
        productpage.selectFirstProduct()
        //Step 8.2
        const cartPage = productpage.goToCart()
        //Step 9
        cartPage.sumOfProduct().then(function(sum)
        {
            expect(sum).to.be.lessThan(200000)
        })
        // step 10.1
        const confirmationPage=cartPage.checkoutItems()
        //step 11.1
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain','Success') 
    })
})