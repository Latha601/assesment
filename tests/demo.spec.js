// @ts-check
import { test, expect } from '@playwright/test';

test('login into book store application', async ({ page }) => {
  await page.goto('https://demoqa.com/');
 await page.locator('//div[@class="card mt-4 top-card"]').nth(5).click();

 await page.locator('button[id="login"]').click();

 await page.locator('//input[@id="userName"]').fill('klatha')

await page.locator('//input[@id="password"]').fill('Latha@123')

 await page.locator('button[id="login"]').click();

  // Expect a title "to contain" a substring.
 await expect(page.locator('//label[@id="userName-value"]')).toBeVisible();
 await expect(page.locator('//button[@id="submit"]')).toBeVisible();
 await page.locator("//span[text()='Book Store']").click();
 await page.locator('input[id="searchBox"]').fill('Learning JavaScript Design Patterns');

 await expect(page.locator('img[src="/images/bookimage0.jpg"]')).toBeVisible(); 

 await expect(page.locator('span[id="see-book-Learning JavaScript Design Patterns"]')).toBeVisible();

  await expect(page.locator('//div[@class="rt-td"][@role="gridcell"]').nth(2)).toHaveText('Addy Osmani');
  await expect(page.locator('//div[@class="rt-td"][@role="gridcell"]').nth(3)).toHaveText("O'Reilly Media");
console.log('Learning JavaScript Design Patterns');
console.log('Addy Osmani'); 
console.log("O'Reilly Media");
 await page.locator('button[id="submit"]').click();
});