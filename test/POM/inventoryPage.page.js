export default class InventoryPage {

    get burgerMenuIcon() {
        return $(`~test-Menu`)
    }
    get cartIcon() {
        return $(`~test-Cart`)
    }
    get cartFlashIcon() {
        return $('//*[@content-desc="test-Cart"]/*/android.widget.TextView')
    }
    get swagLabsTitle() {
        return $(`//*[@content-desc="test-Menu"]/following-sibling::android.widget.ImageView`)
    }
    get inventoryPageTitle() {
        return $(`//*[@text="PRODUCTS"]`)
    }
    get gridChangeIcon() {
        return $(`~test-Toggle`)
    }
    get sortDropDown() {
        return $(`~test-Modal Selector Button`)
    }
    get sortSelectorContainer() {
        return $(`~Selector container`)
    }
    get inventoryItems() {
        return $$(`~test-Item`)
    }
    get inventoryItemNames() {
        return $$(`~test-Item title`)
    }
    get inventoryItemPrices() {
        return $$(`~test-Price`)
    }
    get inventoryItemDescriptions() {
        return $$(`~test-Item description`)
    }
    get addToCartButtons() {
        return $$(`~test-ADD TO CART`)
    }
    get removeButtons() {
        return $$(`~test-REMOVE`)
    }
    get footerContainer() {
        return $('(//android.view.ViewGroup)[22]')
    }
    get footerContainerElements() {
        return $$(`(//android.view.ViewGroup)[22]/*`)
    }
    get burgerMenuCloseIcon() {
        return $(`~test-Close menu`)
    }
    get burgerMenuLogoutButton() {
        return $(`~test-LOGOUT`)
    }
    get burgerMenuAllItemsButton() {
        return $(`~test-ALL ITEMS`)
    }
    get burgerMenuWebViewButton() {
        return $(`~test-WEBVIEW`)
    }
    get burgerMenuQrCodeButton() {
        return $(`~test-QR CODE SCANNER`)
    }
    get burgerMenuGeoLocationButton() {
        return $(`~test-GEO LOCATION`)
    }
    get burgerMenuDrawingButton() {
        return $(`~test-DRAWING`)
    }
    get burgerMenuAboutButton() {
        return $(`~test-ABOUT`)
    }
    get burgerMenuResetAppStateButton() {
        return $(`~test-RESET APP STATE`)
    }

    async selectSortOption(optionText) {
        if (!await this.sortSelectorContainer.isDisplayed()) {
            await this.sortDropDown.click()
        }
        const option = await $(`//*[@text="${optionText}"]`)
        await option.click()
    }
    async verifyProductsSortedLohi() {
        const prices = []
        for (let i = 0; i < this.inventoryItemPrices.length; i++) {
            const priceText = await this.inventoryItemPrices[i].getText()
            const price = parseFloat(priceText.replace('$', ''))
            prices.push(price)
        }
        for (let i = 0; i < prices.length - 1; i++) {
            await expect(prices[i]).toBeLessThanOrEqual(prices[i + 1])
        }
    }
    async verifyProductsSortedHilo() {
        const prices = []
        for (let i = 0; i < this.inventoryItemPrices.length; i++) {
            const priceText = await this.inventoryItemPrices[i].getText()
            const price = parseFloat(priceText.replace('$', ''))
            prices.push(price)
        }
        for (let i = 0; i < prices.length - 1; i++) {
            await expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1])
        }
    }
    async verifyProductsSortedAtoZ() {
        const names = []
        for (let i = 0; i < this.inventoryItemNames.length; i++) {
            const name = await this.inventoryItemNames[i].getText()
            names.push(name)
        }
        const sortedNames = [...names].sort()
        await expect(names).toEqual(sortedNames)
    }
    async verifyProductsSortedZtoA() {
        const names = []
        for (let i = 0; i < this.inventoryItemNames.length; i++) {
            const name = await this.inventoryItemNames[i].getText()
            names.push(name)
        }
        const sortedNames = [...names].sort().reverse()
        await expect(names).toEqual(sortedNames)
    }
    async openBurgerMenu() {
        await this.burgerMenuIcon.click()
    }
    async logoutFromTheApp() {
        if (!(await this.burgerMenuLogoutButton.isDisplayed())) {
            await this.burgerMenuIcon.scrollIntoView();
            await this.burgerMenuIcon.click()
        }
        await this.burgerMenuLogoutButton.click()
    }
    async closeBurgerMenu() {
        await this.burgerMenuCloseIcon.click()
    }
    async isGridViewActive() {
        return !(await this.inventoryItemDescriptions[0].isDisplayed())
    }
    async changeToListView() {
        if (!await this.inventoryItemDescriptions[0].isDisplayed()) {
            await this.gridChangeIcon.click()
            await expect(this.inventoryItemDescriptions[0]).toBeDisplayed()
        }
        return true
    }
    async changeToGridView() {
        if (await this.inventoryItemDescriptions[0].isDisplayed()) {
            await this.gridChangeIcon.click()
            await expect(this.inventoryItemDescriptions[0]).not.toBeDisplayed()
        }
        return true
    }

    async verifyPageIsOpen() {
        await expect(this.inventoryPageTitle).toHaveText('PRODUCTS', { ignoreCase: true, asString: true })
        await expect(this.burgerMenuIcon).toBeDisplayed()
        await expect(this.cartIcon).toBeDisplayed()
        await expect (this.swagLabsTitle).toBeDisplayed()
        await expect (this.gridChangeIcon).toBeDisplayed()
        await expect (this.sortDropDown).toBeDisplayed()
        await expect (this.inventoryItems).toBeDisplayed()
    }
}