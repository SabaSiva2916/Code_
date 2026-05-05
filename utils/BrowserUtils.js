const { chromium } = require("@playwright/test");

class BrowserUtils {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async launchBrowser() {
        this.browser = await chromium.launch({ headless: true });
  }

  async closeBrowser() {
    if (this.page) await this.page.close();
    if (this.browser) await this.browser.close();
  }

  getPage() {
    return this.page;
  }
}

module.exports = BrowserUtils;
