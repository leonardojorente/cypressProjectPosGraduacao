export const LoginScreenSelectors ={
    loginEmailInput: "[action='/login'] [name='email']",
    loginPasswordInput: "[action='/login'] [name='password']",
    loginBtn: "[action='/login'] button[type='submit']",
    loginErrorMessage: "[action='/login'] p",

    signUpEmailInput: "[action='/signup'] [name='email']",
    signUpNameInput: "[action='/signup'] [name='name']",
    signUpBtn: "[action='/signup'] button[type='submit']",
    signUpErrorMessage: "[action='/signup'] p"
}

Cypress.Commands.add('insertLoginEmail', (email) =>{
    cy.log('Insert email for login')
    cy.get(LoginScreenSelectors.loginEmailInput).clear()
    cy.get(LoginScreenSelectors.loginEmailInput).type(email)
})

Cypress.Commands.add('insertLoginPassword', (password) =>{
    cy.log('Insert Password for login')
    cy.get(LoginScreenSelectors.loginPasswordInput).clear()
    cy.get(LoginScreenSelectors.loginPasswordInput).type(password)
})

Cypress.Commands.add('clickLoginButton', () =>{
    cy.log('Click button to confirm login process')
    cy.get(LoginScreenSelectors.loginBtn).click()
})

Cypress.Commands.add('insertSignUpEmail', (email) =>{
    cy.log('Insert email for login')
    cy.get(LoginScreenSelectors.signUpEmailInput).clear()
    cy.get(LoginScreenSelectors.signUpEmailInput).type(email)
})

Cypress.Commands.add('insertSignUpName', (name) =>{
    cy.log('Insert name for sign up')
    cy.get(LoginScreenSelectors.signUpNameInput).clear()
    cy.get(LoginScreenSelectors.signUpNameInput).type(name)
})

Cypress.Commands.add('clickSignUpButton', () =>{
    cy.log('Click button to confirm sign up process')
    cy.get(LoginScreenSelectors.signUpBtn).click()
})