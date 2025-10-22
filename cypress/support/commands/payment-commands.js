export const PaymentScreenSelectors ={
    creditCardNameInput: "[name='name_on_card']",
    creditCardNumberInput: "[name='card_number']",
    creditCVCInput: "[name='cvc']",
    creditCardExpireMonthInput: "[name='expiry_month']",
    creditCardExpireYearInput: "[name='expiry_year']",
    payBtn: "[data-qa='pay-button']",
    paymentConfirmation: "[data-qa='order-placed']"
}

Cypress.Commands.add('typeCreditCardName', (creditCardName) =>{
    cy.log('Type in credit card name input')
    cy.get(PaymentScreenSelectors.creditCardNameInput).clear()
    cy.get(PaymentScreenSelectors.creditCardNameInput).type(creditCardName)
})

Cypress.Commands.add('typeCreditCardNumber', (creditCardNumber) =>{
    cy.log('Type in credit card number input')
    cy.get(PaymentScreenSelectors.creditCardNumberInput).clear()
    cy.get(PaymentScreenSelectors.creditCardNumberInput).type(creditCardNumber)
})

Cypress.Commands.add('typeCVCInput', (cvc) =>{
    cy.log('Type in credit card cvc input')
    cy.get(PaymentScreenSelectors.creditCVCInput).clear()
    cy.get(PaymentScreenSelectors.creditCVCInput).type(cvc)
})

Cypress.Commands.add('typeMonthExpirationInput', (expireMonth) =>{
    cy.log('Type in credit month expiration input')
    cy.get(PaymentScreenSelectors.creditCardExpireMonthInput).clear()
    cy.get(PaymentScreenSelectors.creditCardExpireMonthInput).type(expireMonth)
})

Cypress.Commands.add('typeYearExpirationInput', (expireYear) =>{
    cy.log('Type in credit year expiration input')
    cy.get(PaymentScreenSelectors.creditCardExpireYearInput).clear()
    cy.get(PaymentScreenSelectors.creditCardExpireYearInput).type(expireYear)
})

Cypress.Commands.add('clickConfirmOrderAndPay', () =>{
    cy.log('Click confirm order and pay button')
    cy.get(PaymentScreenSelectors.payBtn).click()
})