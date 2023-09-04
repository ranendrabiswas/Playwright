import { test, expect } from "@playwright/test";

test("auth test #2", async ({ page }) => {
  await page.goto("https://commitquality.com/");
  await expect(page.locator('[data-testid="navbar-logout"]')).toBeVisible();
});