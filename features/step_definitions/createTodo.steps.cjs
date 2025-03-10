const { When, Then } = require('@cucumber/cucumber')
const { chromium } = require('playwright');
const {test, expect } = require('@playwright/test');
const playwright = require('@playwright/test')

Given('user authentication', async function () {
    // Write code here that turns the phrase above into concrete actions

    //browser = await chromium.launch({ headless: false });
    const browser = await playwright.chromium.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
 
    
  });

  When('I navigate to the todo page and add a todo', async function () {
    // Write code here that turns the phrase above into concrete actions

    await page.goto('http://localhost:5173/');
    await page.getByLabel('User').click();
    await page.getByRole('link', { name: 'Add Task' }).click();
    await page.getByRole('button', { name: 'Create Task' }).click();
    await page.getByPlaceholder('Enter task name').click();
    await page.getByPlaceholder('Enter task name').fill('assessment1');
    await page.getByPlaceholder('Enter task description').click();
    await page.getByPlaceholder('Enter task description').fill('just an assessment');
    await page.getByPlaceholder('Enter deadline date').click();
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'office  Work' }).click();
    await page.getByRole('option', { name: 'house  Home' }).click();
    await page.getByRole('button', { name: 'Create Task' }).click();

  });

  Then('I should see a text saying {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await expect (page.getByRole('heading', { name: 'You have 1 task to complete.' })).tobeVisible

    
  });