export const ProductsScreenSelectors ={
    searchInput: "#search_product",
    searchBtn: "#submit_search",
    searchTitle: "[class='title text-center']",
    productInfoName: "[class='productinfo text-center'] p",
    productViewBtn: (id) => `[href='/product_details/${id}']`
}

Cypress.Commands.add('typeInSearchInput', (productName) =>{
    cy.log('Type in search input')
    cy.get(ProductsScreenSelectors.searchInput).clear()
    cy.get(ProductsScreenSelectors.searchInput).type(productName)
})

Cypress.Commands.add('clickSearchBtn', () =>{
    cy.log('Click search button')
    cy.get(ProductsScreenSelectors.searchBtn).click()
})

Cypress.Commands.add('clickFirstProductView', () =>{
    cy.log('Click first product view button')
    cy.get(ProductsScreenSelectors.productViewBtn()).click()
})

Cypress.Commands.add('clickProductView', (id) =>{
    cy.log(`Click product view button for product id ${id}`)
    cy.get(ProductsScreenSelectors.productViewBtn(id)).click()
})