import test, { expect } from "@fixtures/basepages";
import * as data from "testData/login.cred.json"
//import LoginPage from "pages/loginPage/Login.page";
test("Login test",async({page,loginPage})=>{
    // await page.goto('/admin/#/sign-in')
    await page.goto("/login")
    await loginPage.login(data.username2, data.password2)
    await page.waitForTimeout(3000)
})