import InventoryPage from "../POM/inventoryPage.page";
const inventoryPage = new InventoryPage();
import LoginPage from "../POM/LoginPage.page";
const loginPage = new LoginPage();

describe('SauceDemo inventory page test', function () {
    this.beforeEach(async () => {
        await driver.terminateApp('com.swaglabsmobileapp')
        await driver.activateApp('com.swaglabsmobileapp')
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.verifyPageIsOpen()
    })
    it("verify page is open", async () => {
        await inventoryPage.verifyPageIsOpen()
    })
    it('Logout from the app', async () => {
        await inventoryPage.logoutFromTheApp()
        await loginPage.checkLoginPageOpen()
    })
    it ('Verify products are sorted Low to High', async () => {
        await inventoryPage.selectSortOption('Price (low to high)')
        await inventoryPage.verifyProductsSortedLohi()
    })
    it ('Verify products are sorted High to Low', async () => {
        await inventoryPage.selectSortOption('Price (high to low)')
        await inventoryPage.verifyProductsSortedHilo()
    })
    it ('Verify products are sorted A to Z', async () => {
        await inventoryPage.selectSortOption('Name (A to Z)')
        await inventoryPage.verifyProductsSortedAtoZ()
    }) 
    it ('Verify products are sorted Z to A', async () => {
        await inventoryPage.selectSortOption('Name (Z to A)')
        await inventoryPage.verifyProductsSortedZtoA()
    })
    it('Change to list view', async () => {
        await inventoryPage.changeToListView()
        const isGridView = await inventoryPage.isGridViewActive()
        expect(isGridView).toBe(false)
    })
    it('Change to grid view', async () => {
        await inventoryPage.changeToGridView()
        const isGridView = await inventoryPage.isGridViewActive()
        expect(isGridView).toBe(true)
    })
})