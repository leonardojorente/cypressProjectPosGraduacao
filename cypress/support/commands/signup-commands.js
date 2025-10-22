export const SignupScreenSelectors ={
    nameInput: "#name",
    emailInput: "#email",
    passwordInput: "#password",
    firstNameInput: "#first_name",
    lastNameInput: "#last_name",
    addressInput: "#address1",
    countryDropDown: "#country",
    stateInput: "#state",
    cityInput: "#city",
    zipCodeInput: "#zipcode",
    mobileNumberInput: "#mobile_number",
    createAccountBtn: "[data-qa='create-account']",
    accountCreatedMessage: "[data-qa='account-created'] b"
}

Cypress.Commands.add('typeInNameInput', (name) =>{
    cy.log('Type in Name input')
    cy.get(SignupScreenSelectors.nameInput).clear()
    cy.get(SignupScreenSelectors.nameInput).type(name)
})

Cypress.Commands.add('typeInEmailInput', (email) =>{
    cy.log('Type in Name input')
    cy.get(SignupScreenSelectors.emailInput).clear()
    cy.get(SignupScreenSelectors.emailInput).type(email)
})

Cypress.Commands.add('typeInPasswordInput', (password) =>{
    cy.log('Type in password input')
    cy.get(SignupScreenSelectors.passwordInput).clear()
    cy.get(SignupScreenSelectors.passwordInput).type(password)
})

Cypress.Commands.add('typeInFirstNameInput', (firstName) =>{
    cy.log('Type in first name input')
    cy.get(SignupScreenSelectors.firstNameInput).clear()
    cy.get(SignupScreenSelectors.firstNameInput).type(firstName)
})

Cypress.Commands.add('typeInLastNameInput', (lastName) =>{
    cy.log('Type in last name input')
    cy.get(SignupScreenSelectors.lastNameInput).clear()
    cy.get(SignupScreenSelectors.lastNameInput).type(lastName)
})

Cypress.Commands.add('typeInAddressInput', (address) =>{
    cy.log('Type in address input')
    cy.get(SignupScreenSelectors.addressInput).clear()
    cy.get(SignupScreenSelectors.addressInput).type(address)
})

Cypress.Commands.add('SelectCountryFromDropDown', (country) =>{
    cy.log('Select country from dropdown')
    cy.get(SignupScreenSelectors.countryDropDown).select(country)
})

Cypress.Commands.add('typeInStateInput', (state) =>{
    cy.log('Type in state input')
    cy.get(SignupScreenSelectors.stateInput).clear()
    cy.get(SignupScreenSelectors.stateInput).type(state)
})

Cypress.Commands.add('typeInCityInput', (city) =>{
    cy.log('Type in city input')
    cy.get(SignupScreenSelectors.cityInput).clear()
    cy.get(SignupScreenSelectors.cityInput).type(city)
})

Cypress.Commands.add('typeInZipCodeInput', (zipCode) =>{
    cy.log('Type in zip code input')
    cy.get(SignupScreenSelectors.zipCodeInput).clear()
    cy.get(SignupScreenSelectors.zipCodeInput).type(zipCode)
})

Cypress.Commands.add('typeInMobileNumberInput', (mobileNumber) =>{
    cy.log('Type in mobile number input')
    cy.get(SignupScreenSelectors.mobileNumberInput).clear()
    cy.get(SignupScreenSelectors.mobileNumberInput).type(mobileNumber)
})