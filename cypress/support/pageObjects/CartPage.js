//Step 1

import ConfirmationPage from '../pageObjects/ConfirmationPage'

class CartPage
{
   //Step 8.1 : Add sum method
 sumOfProduct()
  {
    let sum = 0
    return cy.get('tr td:nth-child(4) strong')
         .each($el=>{
            //converting string to int
           const amount =Number($el.text().split(" ")[1].trim())
           sum =  sum + amount // 65000 + 100000
           }).then(()=>{
            return sum
        })
   }
   
   //Step 10 : adding checkout method
   checkoutItems()
   {
      cy.contains('button','Checkout').click()
      return new ConfirmationPage()
   }
}

//Step 8.1
export default CartPage