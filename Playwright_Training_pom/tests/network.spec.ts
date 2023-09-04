import { test } from '@playwright/test';

test("Block images - Network Intercept", async ({ page }) => {
    const url = <string>process.env.URL;
    await page.route("**/*", request => {
        return request.request().resourceType() === "image"
            ? request.abort() :
            request.continue();
    });

    await page.goto(url, { waitUntil: "domcontentloaded" })

    await page.waitForTimeout(5000);

    
})