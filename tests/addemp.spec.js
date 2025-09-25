import { test, expect } from '@playwright/test';
import logindata from '../testdata/logincredintal.json'
import empdata from'../testdata/addemp.json'



test('add employee',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await page.locator('input[name="username"]').fill(logindata.username)
    await page.locator('input[name="password"]').fill(logindata.password);
    await page.locator('button[type="submit"]').click();
    await page.getByText('PIM').click();
    await page.getByText('Add Employee').click();
    await page.locator('input[name="firstName"]').fill(empdata.firstname);
    await page.locator('input[name="lastName"]').fill(empdata.lastname);
    await page.locator('//input[@class="oxd-input oxd-input--active"]').first().fill(empdata.empid);
    await page.locator('button[type="submit"]').click();



})



    
