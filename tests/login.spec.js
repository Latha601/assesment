import { test, expect } from '@playwright/test';
import logindata from '../testdata/logincredintal.json'



test.describe('login functionality', () => {

  test('verify login with valid credentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill(logindata.username)
    await page.locator('input[name="password"]').fill(logindata.password);
    await page.locator('button[type="submit"]').click();

  })

  test('varify login with invalid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill(logindata.invalidusername);
    await page.locator('input[name="password"]').fill(logindata.invalidpassword);
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials');
  })

  test('varify login with invalid username', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill(logindata.invalidusername);
    await page.locator('input[name="password"]').fill(logindata.password);
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials');


  })

  test('verify login with invalid password', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill(logindata.username);
    await page.locator('input[name="password"]').fill(logindata.invalidpassword);
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials');

  })

})