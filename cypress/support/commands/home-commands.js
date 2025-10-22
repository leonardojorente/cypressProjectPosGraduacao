export const HomeScreenSelectors ={
    logoutBtn: "[href='/logout']",
    contactUsBtn: "[href='/contact_us']",
    productsBtn: "[href='/products']",
    cartBtn: "[href='/cart']",
    subscriptionInput: "#susbscribe_email",
    subscriptionBtn: "#subscribe",
    subscriptionTitle: "[class='single-widget'] h2",
    subscribeMesage: "[class='alert-success alert']",
    loggedUserLocationName: "[class='nav navbar-nav'] b",
    deleteAccountBtn: "[href='/delete_account']",
}

Cypress.Commands.add('clickLogoutBtn', () =>{
    cy.log('Click logout button')
    cy.get(HomeScreenSelectors.logoutBtn).click()
})

Cypress.Commands.add('clickContactUsBtn', () =>{
    cy.log('Click contact us button')
    cy.get(HomeScreenSelectors.contactUsBtn).click()
})

Cypress.Commands.add('clickProductsBtn', () =>{
    cy.log('Click products button')
    cy.get(HomeScreenSelectors.productsBtn).click()
})

Cypress.Commands.add('scrollDownToFooter', () =>{
    cy.log('Scroll to footer')
    cy.scrollTo('bottom')
})

Cypress.Commands.add('clickSubscribeBtn', () =>{
    cy.log('Click subscribe button')
    cy.get(HomeScreenSelectors.subscriptionBtn).click()
})

Cypress.Commands.add('typeInSubscribeInput', (subscribeEmail) =>{
    cy.log('Type in subscribe input')
    cy.get(HomeScreenSelectors.subscriptionInput).clear()
    cy.get(HomeScreenSelectors.subscriptionInput).type(subscribeEmail)
})

Cypress.Commands.add('clickCartBtn', () =>{
    cy.log('Click cart button')
    cy.get(HomeScreenSelectors.cartBtn).click()
})

Cypress.Commands.add('clickDeleteAccountBtn', () =>{
    cy.log('Click delete account button')
    cy.get(HomeScreenSelectors.deleteAccountBtn).click()
})