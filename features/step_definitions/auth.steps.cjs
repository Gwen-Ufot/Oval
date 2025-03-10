const { When, Then } = require('@cucumber/cucumber')
const { chromium } = require('playwright');
const {test, expect } = require('@playwright/test');
const playwright = require('@playwright/test')

Given('I navigate to the application url', async function () {
    // Write code here that turns the phrase above into concrete actions

    const browser = await playwright.chromium.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
   
  });

  When('I navigate to the users page to add a user', async function () {
    // Write code here that turns the phrase above into concrete actions

    //await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Sidebar' }).click();
    await page.getByRole('link', { name: 'User' }).click();
    await page.getByRole('textbox', { name: 'Add Name' }).click();
    await page.getByRole('textbox', { name: 'Add Name' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Add Name' }).fill('M');
    await page.getByRole('textbox', { name: 'Add Name' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Add Name' }).fill('Minie');
    await page.getByRole('button', { name: 'Save name' }).click()

    
  });

  Then('I should see a text saying {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await expect (page.getByRole('heading', { name: 'You have 1 task to complete.' })).tobeVisible

  });