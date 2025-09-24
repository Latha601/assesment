import { test, expect } from '@playwright/test';
test("working with elements drag&drop", async ({ page }) => {
    await page.goto("https://kitchen.applitools.com/ingredients/drag-and-drop")
    await page.locator("#menu-fried-chicken").dragTo(page.locator("#plate-items"))
    await page.locator("#menu-hamburger").dragTo(page.locator("#plate-items"))
    await page.locator("#menu-ice-cream").dragTo(page.locator("#plate-items"))

    const sourcechicken = await page.locator("#menu-fried-chicken");
    const hamburger = await page.locator("#menu-hamburger");
    const icecream = await page.locator("#menu-ice-cream");

    const targertlocator = await page.locator("#plate-items");

    await sourcechicken.dragTo(targertlocator);
    await hamburger.dragTo(targertlocator);
    await icecream.dragTo(targertlocator);


})
