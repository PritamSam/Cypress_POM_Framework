import CartPage from '../../support/pageObjects/CartPage'


//Step 1
class ProductPage
{
    //Step 6:
    pageValidation()
    {
        cy.contains('Shop Name').should('be.visible')
    }

    verifyCardLimit()
    {
        cy.get('app-card').should('have.length',4)
    }

    selectFirstProduct()
    {
        cy.get('app-card').eq(0).contains('button','Add').click()
    }

        selectProduct(productName)
    {
         cy.get('app-card').filter(`:contains("${productName}")`).then($element=>{
            //wrap methods is used to handle yielded elements
            cy.wrap($element).should('have.length',1)
            cy.wrap($element).contains('button','Add').click()
        })
    }
    
    //Step 8 : Adding method for Cart
    goToCart()
    {
        cy.contains('a','Checkout').click()
        return new CartPage()
    }
    //Step 8.2 : get Card count method
    getCardCount()
    {
        return cy.get('app-card')
    }

}
//Step 8.1
export default ProductPage;