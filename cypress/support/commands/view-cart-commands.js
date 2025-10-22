export const ViewCartScreenSelectors ={
    proceedTocheckoutBtn: "[class='btn btn-default check_out']",
    deliverAddress: "[class='address_address1 address_address2']",
    commentInput: "[name='message']",
    placeOderBtn: "[href='/payment']"
}

Cypress.Commands.add('clickProceedTocheckoutBtn', () =>{
    cy.log('click Proceed To checkout')
    cy.get(ViewCartScreenSelectors.proceedTocheckoutBtn).click()
})

Cypress.Commands.add('InputCommentToTheOrder', (comment) =>{
    cy.log('Type a comment to the order')
    cy.get(ViewCartScreenSelectors.commentInput).clear()
    cy.get(ViewCartScreenSelectors.commentInput).type(comment)
})

Cypress.Commands.add('clickPlaceOrder', () =>{
    cy.log('click place order button')
    cy.get(ViewCartScreenSelectors.placeOderBtn).click()
})