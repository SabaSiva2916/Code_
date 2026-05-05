class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.confirmationMessage = ".complete-header";
  }

  async getConfirmationMessage() {
    return await this.page.textContent(this.confirmationMessage);
  }

  async takeScreenshot(filename) {
    await this.page.screenshot({ path: filename });
  }
}

module.exports = CheckoutCompletePage;
