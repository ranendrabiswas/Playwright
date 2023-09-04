import { expect, test } from "@playwright/test";


test.describe("Auth - Playwright", () => {

    test("Http Auth", async ({ browser }) => {

        const context = await browser.newContext({
            httpCredentials: {
                username: "admin",
                password: "admin"
            }
        })

        const page = await context.newPage();
        await page.goto("https://the-internet.herokuapp.com/basic_auth");
        const header = await page.$("h3");

        if (header) {
            // console.log(await header.textContent());
            expect(await header.textContent()).toBe("Basic Auth");
        }
    })

})