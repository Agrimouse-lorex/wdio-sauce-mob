export default class LoginPage {

    get usernameInput() {
        return $(`~test-Username`)
    }
    get passwordInput() {
        return $(`~test-Password`)
    }
    get loginButton() {
        return $(`~test-LOGIN`)
    }
    get inventoryPageTitle() {
        return $(`//*[@text="PRODUCTS"]`)
    }
    get errorMessage() {
        return $(`~test-Error message`)
    }

    async login(username, password) {
        await this.usernameInput.waitForExist({ timeout: 20000 })
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }
    async loginCheck() {
        await expect(this.inventoryPageTitle).toHaveText('PRODUCTS', {ignoreCase: true, asString: true})
        console.log('Login successful')
    }
    async errorMessageCheck() {
        await expect(this.errorMessage).toBeDisplayed()
        console.log('Login failed, error message displayed')
    }
    async errorMessageCheckForText(errorText) {
        await expect(this.errorMessage).toHaveText(errorText)
        console.log('Login failed, error message displayed')
    }
    async verifyPageIsOpen() {
        await expect(this.inventoryPageTitle).toHaveText('PRODUCTS', {ignoreCase: true, asString: true})
        console.log('Inventory page is open')
    }
}