import { test, expect } from "@playwright/test";



test("Login", async ({ page }) => {

  let str
  // str = "test";
 const username = <any>process.env.USER_NAME;
 const password = <any>process.env.PASSWORD;
  console.log("str: ", str);


  await page.goto("https://commitquality.com/login");
  await page.locator('[data-testid="username-textbox"]').fill(username);
  await page.locator('[data-testid="password-textbox"]').fill(password);
  await page.locator('[data-testid="login-button"]').click();

  //await expect(page.locator('[data-testid="navbar-logout"]')).toBeVisible();

  // Save the state of the webpage - now that its logged in
  await page.context().storageState({ path: "./LoginAuth.json" });
});