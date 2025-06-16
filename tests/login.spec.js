const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const LoginPage = require('./pages/LoginPage');
const DashboardPage = require('./pages/DashboardPage');

// Read credentials from JSON file
const credentialsPath = path.join(__dirname, 'credentials.json');
const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

test('login test with multiple credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  for (const cred of credentials) {
    // Navigate to the login page
    await loginPage.navigate();

    // Perform login
    await loginPage.login(cred.username, cred.password);

    // Verify login success
    await expect(await loginPage.getSuccessMessage()).toBeVisible();

    // Verify dashboard title
    await expect(await dashboardPage.getDashboardTitle()).toBeVisible();
  }
});

test('forgot password test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the login page
  await loginPage.navigate();

  // Click the forgot password link
  await loginPage.clickForgotPassword();

  // Verify that the forgot password page is loaded
  await expect(page).toHaveURL(/.*\/forgot_password/);
}); 