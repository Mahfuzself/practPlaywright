import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
//import LoginPage from "pages/loginPage/Login.page";
test("Login test",async({page,loginPage})=>{
    await page.goto("/login")
    await loginPage.login(data.username2, data.password2)
    await page.waitForTimeout(3000)
})
test("001Login  -> 01 Validate empty password allert without input password field",async({page,loginPage})=>{
    await page.goto("/login")
    await loginPage.inputusernamefield(data.validusername)
    await loginPage.clickSubmittBtn()
    await loginPage.clickEmptyPasswordIcon()
    await loginPage.verifyEmpltyPassword_Alert()
    await page.waitForTimeout(3000)
})
test("001Login -> 02 Validate empty username alert without input username field",async({page,loginPage})=>{
    // await page.goto('/admin/#/sign-in')
    await page.goto("/login")
    await loginPage.inputpasswordfield(data.validpassword)
    await loginPage.clickSubmittBtn()
    await loginPage.clickEmptyUsernameIcon()
    await loginPage.verifyEmptyUsername_Alert()
    await page.waitForTimeout(3000)
})
test("001Login -> 03 Validate invalid format alert for username/email field",async({page,loginPage})=>{
    // await page.goto('/admin/#/sign-in')
    await page.goto("/login")
    await loginPage.invalidusernameformat()
    await loginPage.clickEmptyUsernameIcon()
    await loginPage.verifyInvalaidUsernameFormat_Alert()
    await page.waitForTimeout(3000)
})
test.only("001Login -> 04 Validate login sucessfully",async({page,loginPage})=>{
    // await page.goto('/admin/#/sign-in')
    await page.goto("/login")
    await loginPage.login(data.validusername,data.validpassword)
    await page.reload()
    await page.waitForTimeout(50000)
})