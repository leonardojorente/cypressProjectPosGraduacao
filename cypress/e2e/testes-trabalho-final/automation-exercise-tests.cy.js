import { LoginScreenSelectors } from '../../support/commands/login-commands'
import { HomeScreenSelectors } from '../../support/commands/home-commands'
import { ProductsScreenSelectors } from '../../support/commands/products-commands'
import { SignupScreenSelectors } from '../../support/commands/signup-commands'
import { ProductsDetailScreenSelectors } from '../../support/commands/products-detail-commands'
import { ContactUsScreenSelectors } from '../../support/commands/contact-us-commands'
import { PaymentScreenSelectors } from '../../support/commands/payment-commands'
import { ViewCartScreenSelectors } from '../../support/commands/view-cart-commands'
import { DeletedAccountScreenSelectors } from '../../support/commands/deleted-account-commands'

describe('Automation Exercise tests', () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/login")
  })

  it('Test Case 1: Register User', () => {
    const timestamp = new Date().getTime();

    cy.insertSignUpName('QA tester')
    cy.insertSignUpEmail(`qa-tester-${timestamp}@test.com`)
    cy.clickSignUpButton()
    cy.typeInPasswordInput('123')
    cy.typeInFirstNameInput('Bob')
    cy.typeInLastNameInput('narciso pipoc')
    cy.typeInAddressInput('av selenium, n 2004')
    cy.SelectCountryFromDropDown('Canada')
    cy.typeInStateInput('California')
    cy.typeInCityInput('Los angeles')
    cy.typeInZipCodeInput('90001')
    cy.typeInMobileNumberInput('111 222 333')
    cy.get(SignupScreenSelectors.createAccountBtn).click()

    cy.url().should('includes', 'account_created')
    cy.get(SignupScreenSelectors.accountCreatedMessage).should('contain', 'Account Created!')
  })

  it('Test Case 2: Login User with correct email and password', () => {
    cy.insertLoginEmail('leonardoj@teste.com')
    cy.insertLoginPassword('12345')
    cy.clickLoginButton()

    cy.get(HomeScreenSelectors.logoutBtn).should('be.visible')
  })
  
  it('Test Case 3: Login User with incorrect email and password', () => {
    cy.insertLoginEmail('randomErrado@testing.com')
    cy.insertLoginPassword('wrongpassword')
    cy.clickLoginButton()

    cy.get(LoginScreenSelectors.loginErrorMessage).should('contain','Your email or password is incorrect!')
  })
  
  it('Test Case 4: Logout User', () => {
    cy.insertLoginEmail('leonardoj@teste.com')
    cy.insertLoginPassword('12345')
    cy.clickLoginButton()
    cy.clickLogoutBtn()

    cy.url().should('contain', 'login')
  })  

  it('Test Case 5: Register User with existing email', () => {
    cy.insertSignUpName('QA Tester')
    cy.insertSignUpEmail('leonardoj@teste.com')
    cy.clickSignUpButton()

    cy.get(LoginScreenSelectors.signUpErrorMessage).should('contain','Email Address already exist!')
  })

  it('Test Case 6: Contact Us Form', () => {
    cy.insertLoginEmail('leonardoj@teste.com')
    cy.insertLoginPassword('12345')
    cy.clickLoginButton()
    cy.clickContactUsBtn()

    cy.url().should('include', '/contact_us')
    cy.get(ContactUsScreenSelectors.contactUsTitle).should('contain', 'Get In Touch')

    cy.typeInContactUsName('QA Tester')
    cy.typeInContactUsEmail('leonardoj@teste.com')
    cy.typeInContactUsSubject('Teste Cypress')
    cy.typeInContactUsMessage('Esta é uma mensagem de teste enviada via Cypress.')
    cy.uploadContactUsFile()
    cy.get(ContactUsScreenSelectors.contactUsSubmitBtn).click()

    cy.get(ContactUsScreenSelectors.contactUsSuccessMessage).should('contain', 'Success! Your details have been submitted successfully.')

    cy.clickgoBackToHomeBtn()
    cy.get(HomeScreenSelectors.logoutBtn).should('be.visible')
  })  

  it('Test Case 8: Verify All Products and product detail page', () => {
    cy.insertLoginEmail('leonardoj@teste.com')
    cy.insertLoginPassword('12345')
    cy.clickLoginButton()
    cy.clickProductsBtn()

    cy.url().should('include', '/products')
    cy.clickProductView(1) 
    cy.xpath(ProductsDetailScreenSelectors.productBrand).should('contain', 'Polo')
    cy.xpath(ProductsDetailScreenSelectors.productCondition).should('contain', 'New')
    cy.xpath(ProductsDetailScreenSelectors.productAvailability).should('contain', 'In Stock')
    cy.xpath(ProductsDetailScreenSelectors.productPrice).should('contain', '500')
    cy.xpath(ProductsDetailScreenSelectors.productCategory).should('contain','Women > Tops')
    cy.xpath(ProductsDetailScreenSelectors.productName).should('contain','Blue Top')
  }) 

  it('Test Case 9: Search Product', () => {
    cy.insertLoginEmail('leonardoj@teste.com')
    cy.insertLoginPassword('12345')
    cy.clickLoginButton()
    cy.clickProductsBtn()

    cy.url().should('include', '/products')

    cy.typeInSearchInput('Men Tshirt')
    cy.clickSearchBtn()

    cy.get(ProductsScreenSelectors.searchTitle).should('contain', 'Searched Products')
    cy.get(ProductsScreenSelectors.productInfoName).should('contain', 'Men Tshirt')
  })
  
  it('Test Case 10: Verify Subscription in home page', () => {
    cy.insertLoginEmail('leonardoj@teste.com')
    cy.insertLoginPassword('12345')
    cy.clickLoginButton()
    cy.scrollDownToFooter()

    cy.get(HomeScreenSelectors.subscriptionTitle).should('contain', 'Subscription')

    cy.typeInSubscribeInput('leonardoj@teste.com')
    cy.clickSubscribeBtn()

    cy.get(HomeScreenSelectors.subscribeMesage).should('contain', 'You have been successfully subscribed!')

  }) 

  it('Test Case 15: Place Order: Register before Checkout', () => {
    //create user account
    const timestamp = new Date().getTime();
    const newUserName = `qa-tester-${timestamp}`
    const newUserEmail = `qa-tester-${timestamp}@test.com`
    const newPassword = '1234567'
    const newAddress = 'av selenium, n 2004'

    cy.insertSignUpName(newUserName)
    cy.insertSignUpEmail(newUserEmail)
    cy.clickSignUpButton()
    cy.typeInPasswordInput(newPassword)
    cy.typeInFirstNameInput('Bob')
    cy.typeInLastNameInput('narciso pipoc')
    cy.typeInAddressInput(newAddress)
    cy.SelectCountryFromDropDown('Canada')
    cy.typeInStateInput('California')
    cy.typeInCityInput('Los angeles')
    cy.typeInZipCodeInput('90001')
    cy.typeInMobileNumberInput('111 222 333')
    cy.get(SignupScreenSelectors.createAccountBtn).click()

    cy.url().should('includes', 'account_created')
    cy.get(SignupScreenSelectors.accountCreatedMessage).should('contain', 'Account Created!')

    //login with new user
    cy.visit("https://automationexercise.com")

    cy.get(HomeScreenSelectors.loggedUserLocationName).should('contain', newUserName)

    //add product to the cart
    cy.clickProductsBtn()
    cy.clickProductView(1) 
    cy.clickAddToCartBtn()
    cy.clickViewCartFromModal()

    cy.url().should('include', '/view_cart')

    //Place the order
    cy.clickProceedTocheckoutBtn()
    cy.get(ViewCartScreenSelectors.deliverAddress).should('contain', newAddress)
    cy.InputCommentToTheOrder('Por favor, entregar entre 9h e 18h.')
    cy.clickPlaceOrder()

    //payment
    cy.typeCreditCardName('Leonardo Junior')
    cy.typeCreditCardNumber('4111111111111111')
    cy.typeCVCInput('123')
    cy.typeMonthExpirationInput('12')
    cy.typeYearExpirationInput('2025')
    cy.get(PaymentScreenSelectors.payBtn).click()

    cy.get(PaymentScreenSelectors.paymentConfirmation).should('contain', 'Order Placed!')

    //delete user created for the test
    cy.clickDeleteAccountBtn()
    cy.get(DeletedAccountScreenSelectors.deletedAccountMessage).should('contain', 'Account Deleted!')
  }) 
})
