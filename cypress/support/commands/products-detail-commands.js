export const ProductsDetailScreenSelectors ={
    productBrand: "//*[@class='product-information']//b[contains(text(),'Brand')]//parent::p",
    productCondition: "//*[@class='product-information']//b[contains(text(),'Condition')]//parent::p",
    productAvailability: "//*[@class='product-information']//b[contains(text(),'Availability')]//parent::p",
    productPrice: "//*[@class='product-information']//span[contains(text(),'Rs.')]",
    productCategory: "//*[@class='product-information']//p[contains(text(),'Category')]",
    productName: "//*[@class='product-information']//h2",
    productAddToCartBtn: "[class='btn btn-default cart']",
    viewCartLinkFromModal: "#cartModal [href='/view_cart']"
}

Cypress.Commands.add('clickAddToCartBtn', () =>{
    cy.log('Click add to cart button')
    cy.get(ProductsDetailScreenSelectors.productAddToCartBtn).click()
})

Cypress.Commands.add('clickViewCartFromModal', () =>{
    cy.log('Click view cart from modal')
    cy.get(ProductsDetailScreenSelectors.viewCartLinkFromModal).click()
})