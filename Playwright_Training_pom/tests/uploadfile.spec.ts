import { test, expect } from '@playwright/test';
test.only('Upload a single file and assert', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.setInputFiles('input[type="file"]', 'upload/package-lock.json')

    await page.click('#file-submit')
    await expect(page.locator('#uploaded-files')).toContainText('package-lock.json')
  })

  test('Upload multiple files and assert', async ({page}) => {
    await page.goto('http://blueimp.github.io/jQuery-File-Upload/')
    await page.setInputFiles('input[type="file"]', [
      'upload/package.json',
      'upload/quartz.pdf',
      'upload/username.csv',
    ])

    await expect(page.locator('p.name').nth(0)).toHaveText('package.json')
    await expect(page.locator('p.name').nth(1)).toHaveText('quartz.pdf')
    await expect(page.locator('p.name').nth(2)).toHaveText('username.csv');

    // await page.waitForTimeout(5000);
  }) 