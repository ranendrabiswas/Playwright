import {
    Browser,
    BrowserContext,
    chromium,
    Page,
    test,
    expect,
  } from "@playwright/test";
  
  test.describe("Handling APIs", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    const urlg = "https://jsonplaceholder.typicode.com/todos/1";
    const urlp = "https://jsonplaceholder.typicode.com/todos";
  
    test.beforeAll(async () => {
      browser = await chromium.launch();
      context = await browser.newContext();
      page = await context.newPage();
    });
  
    test.afterAll(async () => {
      await page.close();
      await context.close();
      await browser.close();
    });
  
  
  
    test("Read data from an API (GET)", async ({ request }) => {
      const data01 = await request.get(urlg);
      await expect(data01.ok()).toBeTruthy();
    });
  
    test("should create a new todo record (POST)", async ({ request }) => {
      const newTodo = await request.post(urlp, {
        data: {
          userId: 1,
          title: "new task assigned",
          completed: false,
        },
      });
  
      console.log("new record created at server: ", newTodo.ok());
      await expect(newTodo.ok()).toBeTruthy();
    });
  
  
  });


  