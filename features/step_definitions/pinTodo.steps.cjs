const { When, Then } = require('@cucumber/cucumber')
const { chromium } = require('playwright');
const {test, expect } = require('@playwright/test');
const playwright = require('@playwright/test')

Given('I am on the todo page', async function () {
    // Write code here that turns the phrase above into concrete actions

    const browser = await playwright.chromium.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
 
    
  });

  When('I click on the 3 dots on a todo', async function () {
    
  await page.getByRole('button', { name: 'Task Menu' }).click();
  await page.getByRole('menuitem', { name: 'Pin' }).click();
  await page.getByText('Pinned').click();


  });

  When('I pin a todo', async function () {
    
    await page.getByRole('menuitem', { name: 'Pin' }).click();
    await page.getByText('Pinned').click();
  
  
    });

  Then('I should see a pinned status', async function (string) {
    
    await expect(page.getByText('Pinned')).tobeVisible

    
  });