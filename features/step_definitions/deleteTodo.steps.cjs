const { When, Then } = require('@cucumber/cucumber')
const { chromium } = require('playwright');
const {test, expect } = require('@playwright/test');
const playwright = require('@playwright/test')

Given('I launch application url', async function () {
    // Write code here that turns the phrase above into concrete actions

    //browser = await chromium.launch({ headless: false });
    const browser = await playwright.chromium.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
 
    
  });

  When('I click on the 3 dots of a todo', async function () {
    // Write code here that turns the phrase above into concrete actions

   // await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Task Menu' }).click();
    await page.locator('#task-menu div').first().click();
    await page.getByRole('button', { name: 'Task Menu' }).click();
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.getByText('Confirm to delete task').click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByText('You don\'t have any tasks yet').click();

  });

  Then('I should see a text saying {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await expect (page.getByText('You don\'t have any tasks yet')).tobeVisible

    
  });