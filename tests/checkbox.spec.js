import { test, expect } from '@playwright/test';

test('check the check box',async({page}) => {
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    const checked = await page.locator('//input[@type="checkbox"]').isChecked();
    console.log(checked)
    if(!checked){
        await page.locator('//input[@type="checkbox"]').check()

    }
    await expect(page.locator('//input[@type="checkbox"]')).toBeChecked();

})