import { test, expect } from "@playwright/test";
import json from "../data/response";


test('mocks the data and not call the api', async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api-mocking', async (route) => {
      

      await route.fulfill({ json });
    });
  
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');
  
    // Assert that the fruit is visible
    await expect(page.getByText('Tomato')).toBeVisible();
  });