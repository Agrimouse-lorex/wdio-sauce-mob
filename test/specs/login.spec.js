import LoginPage from "../POM/LoginPage.page"
const loginPage = new LoginPage()


describe('SauceDemo login test', function () {
    // beforeEach(async () => {
    //     await browser.url('https://www.saucedemo.com/')
    // })
    it('Login as standart user', async () => {
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.loginCheck()
        await loginPage.verifyPageIsOpen()
    })
    // it('Login as locked out user', async () => {
    //     await loginPage.login('locked_out_user', 'secret_sauce')
    //     await loginPage.errorMessageCheckForText('Sorry, this user has been locked out.')
    // })
    // it('Login as problem user', async () => {
    //     await loginPage.login('problem_user', 'secret_sauce')
    //     await loginPage.loginCheck()
    //     await loginPage.verifyPageIsOpen()
    // })
    // it('Login with empty username and password', async () => {
    //     await loginPage.login('', '')
    //     await loginPage.errorMessageCheckForText('Username is required')
    //     await loginPage.login('standard_user', '')
    //     await loginPage.errorMessageCheckForText('Password is required')
    // })
    // it('Login with invalid username and password', async () => {
    //     await loginPage.login('invalid_user', 'invalid_password')
    //     await loginPage.errorMessageCheckForText('Username and password do not match any user in this service.')
    // })

})
