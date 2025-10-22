export const ContactUsScreenSelectors ={
    contactUsTitle: "[class='title text-center']",
    contactUsName: "[name='name']",
    contactUsEmail: "[name='email']",
    contactUsSubject: "[name='subject']",
    contactUsMessage: "#message",
    contactUsUploadFile: "[name='upload_file']",
    contactUsSubmitBtn: "[name='submit']",
    contactUsSuccessMessage: "[class='status alert alert-success']",
    goBackToHomeBtn: "//span[contains(text(),'Home')]"
}

Cypress.Commands.add('typeInContactUsName', (name) =>{
    cy.log('Type in name input')
    cy.get(ContactUsScreenSelectors.contactUsName).clear()
    cy.get(ContactUsScreenSelectors.contactUsName).type(name)
})

Cypress.Commands.add('typeInContactUsEmail', (email) =>{
    cy.log('Type in email input')
    cy.get(ContactUsScreenSelectors.contactUsEmail).clear()
    cy.get(ContactUsScreenSelectors.contactUsEmail).type(email)
})

Cypress.Commands.add('typeInContactUsSubject', (subject) =>{
    cy.log('Type in subject input')
    cy.get(ContactUsScreenSelectors.contactUsSubject).clear()
    cy.get(ContactUsScreenSelectors.contactUsSubject).type(subject)
})

Cypress.Commands.add('typeInContactUsMessage', (message) =>{
    cy.log('Type in message input')
    cy.get(ContactUsScreenSelectors.contactUsMessage).clear()
    cy.get(ContactUsScreenSelectors.contactUsMessage).type(message)
})

Cypress.Commands.add('uploadContactUsFile', () => {
    cy.log('Upload file')
    cy.get(ContactUsScreenSelectors.contactUsUploadFile).click()
    cy.get(ContactUsScreenSelectors.contactUsUploadFile).selectFile('cypress/fixtures/example.json')
})

Cypress.Commands.add('clickContactUsSubmitBtn', () =>{
    cy.log('Click submit button')
    cy.get(ContactUsScreenSelectors.contactUsSubmitBtn).click()
})

Cypress.Commands.add('clickgoBackToHomeBtn', () =>{
    cy.log('Click go back home button')
    cy.xpath(ContactUsScreenSelectors.goBackToHomeBtn).click()
})