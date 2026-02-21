import {test ,expect} from '@playwright/test';

test.beforeEach("Go to homepage", async({page}) => {
    await page.goto('https://automation.testathon.hu/');
    
});

test("TC1 - Menu testing", async({page})=> {
    
    // Click "Room" an check is it there
    await page.locator('#navbarNav').getByRole('link', { name: 'Rooms' }).click();
    await expect(page.locator('#rooms')).toBeInViewport();

});