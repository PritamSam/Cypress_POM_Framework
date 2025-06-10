import ProductPage from '../pageObjects/ProductPage'

//Step 1 : Create js files of each web pages under support/pageObject
class HomePage
{
//Step 5: Code for Navigation
goTo(url)
{
    cy.visit(url)
}
//Step 1: Created a login method with parameterized
login(username,password)
{
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.contains("Sign In").click()
    //Step 7.1
    return new ProductPage()
}
}
//Step 8.1
export default HomePage;