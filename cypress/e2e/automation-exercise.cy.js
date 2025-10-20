describe('Automation Exercise using Cypress and xpath', () => {
  it('1- Cadastrar um usuario', () => {
    const timestamp = new Date().getTime();

    cy.viewport('iphone-xr')
    cy.visit('https://automationexercise.com/')
    cy.xpath('//a[@href="/login"]').click()
    cy.xpath('//input[@data-qa="signup-name"]').type('QA tester')
    cy.xpath('//input[@data-qa="signup-email"]').type(`qa-tester-${timestamp}@test.com`)
    cy.xpath('//button[contains(text(),"Signup")]').click()
    cy.xpath('//input[@type="radio"]').check('Mrs')
    cy.xpath('//input[@id="password"]').type('123', { log: false })
    cy.xpath('//*[@data-qa="days"]').select('20')
    cy.xpath('//*[@data-qa="months"]').select('September')
    cy.xpath('//*[@data-qa="years"]').select('1992')
    cy.xpath('//input[@type="checkbox" and @id="newsletter"]').check()
    cy.xpath('//input[@type="checkbox" and @id="optin"]').check()
    cy.xpath('//input[@id="first_name"]').type('Bob')
    cy.xpath('//input[@id="last_name"]').type('narciso pipoc')
    cy.xpath('//input[@id="company"]').type('PGATS')
    cy.xpath('//input[@id="address1"]').type('av selenium, n 2004')
    cy.xpath('//select[@id="country"]').select('Canada')
    cy.xpath('//input[@id="state"]').type('California')
    cy.xpath('//input[@id="city"]').type('Los angeles')
    cy.xpath('//input[@id="zipcode"]').type('90001')
    cy.xpath('//*[@data-qa="mobile_number"]').type('111 222 333')
    cy.xpath('//*[@data-qa="create-account"]').click()

    //triplo A - arrange, act, assert
    cy.url().should('includes', 'account_created')
    cy.xpath('//*[@data-qa="account-created"]//b').should('contain', 'Account Created!')
  })

  it('2- Login de Usuário com e-mail e senha corretos', () => {
    cy.visit('https://automationexercise.com/')
    cy.xpath('//a[@href="/login"]').click()
    cy.xpath('//*[@data-qa="login-email"]').type('leonardoj@teste.com')
    cy.xpath('//*[@data-qa="login-password"]').type('12345')

    cy.xpath('//*[@data-qa="login-button"]').click()

    cy.xpath('//a[@href="/logout"]').should('be.visible')
  })
  
  it('3- Login de Usuário com e-mail e senha incorretos', () => {
    cy.visit('https://automationexercise.com/')
    cy.xpath('//a[@href="/login"]').click()
    cy.xpath('//*[@data-qa="login-email"]').type('randomErrado@testing.com')
    cy.xpath('//*[@data-qa="login-password"]').type('12345')
    cy.xpath('//*[@data-qa="login-button"]').click()

    cy.xpath('//*[@action="/login"]//p').should('contain', 'Your email or password is incorrect!')
  })
  
  it('4- Logout de usuário', () => {
    cy.visit('https://automationexercise.com/')
    cy.xpath('//a[@href="/login"]').click()
    cy.xpath('//*[@data-qa="login-email"]').type('leonardoj@teste.com')
    cy.xpath('//*[@data-qa="login-password"]').type('12345')
    cy.xpath('//*[@data-qa="login-button"]').click()

    cy.xpath('//a[@href="/logout"]').should('be.visible').click()
    cy.url().should('contain', 'login')
  })  

  it('5- Cadastrar usuário com e-mail existente no sistema', () => {
    cy.visit('https://automationexercise.com/')
    cy.xpath('//a[@href="/login"]').click()

    cy.xpath('//*[@data-qa="signup-name"]').type('QA Tester')
    cy.xpath('//*[@data-qa="signup-email"]').type('leonardoj@teste.com')

    cy.xpath('//*[@data-qa="signup-button"]').click()

    cy.xpath('//*[@action="/signup"]//p').should('contain', 'Email Address already exist!')
  })  
})
