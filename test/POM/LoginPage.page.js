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
        return $(`//*[@content-desc="test-Error message"]/*`)
    }

    async login(username, password) {
        await this.usernameInput.waitForExist({ timeout: 20000 })
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }
    async loginCheck() {
        await expect(this.inventoryPageTitle).toHaveText('PRODUCTS', {ignoreCase: true, asString: true})
    }
    async checkLoginPageOpen() {
        await this.loginButton.waitForExist({ timeout: 20000 })
        await expect(this.loginButton).toBeDisplayed({ timeout: 20000 })
    }
    async errorMessageCheckForText(errorText) {
        await expect(this.errorMessage).toHaveText(errorText)
    }
    async verifyPageIsOpen() {
        await expect(this.inventoryPageTitle).toHaveText('PRODUCTS', {ignoreCase: true, asString: true})
    }
}