import { test, expect } from '@playwright/test';
import LoginPage from './pages/login'


test.describe("Pg Obj Model (POM) usage", async () => {

  test('test without the use of Pg Obj Model (POM)', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');
    
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure') ;

  });

  test('test using POM', async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.gotoLoginPage()
    await Login.login('tomsmith', 'SuperSecretPassword!')
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure') ;

  });

})