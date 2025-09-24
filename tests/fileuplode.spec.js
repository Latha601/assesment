import { test, expect } from '@playwright/test';

test('working with fileuplode & downlode', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles('testdata\\images\\download.jpeg')
    await page.locator('#file-submit').click()
    await expect(page.locator('#uploaded-files')).toHaveText('download.jpeg')
    await expect(page.locator('div[class="example"]>h3')).toBeVisible('File Uploaded!')

})