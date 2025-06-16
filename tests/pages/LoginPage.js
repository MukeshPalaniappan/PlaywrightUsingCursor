class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button[type="submit"]';
    this.successMessage = '#flash';
    this.forgotPasswordLink = 'a[href="/forgot_password"]';
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async getSuccessMessage() {
    return this.page.locator(this.successMessage);
  }

  async clickForgotPassword() {
    await this.page.click(this.forgotPasswordLink);
  }
}

module.exports = LoginPage; 