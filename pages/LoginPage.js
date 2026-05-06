class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = "#user-name";
    this.passwordField = "#password";
    this.loginButton = "#login-button";
  }

  async navigateToLoginPage() {
    await this.page.goto("https://www.saucedemo.com/", { waitUntil: "load" });
    await this.page.waitForSelector(this.usernameField, { timeout: 10000 });
  }

  async enterUsername(username) {
    await this.page.fill(this.usernameField, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordField, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}

module.exports = LoginPage;
