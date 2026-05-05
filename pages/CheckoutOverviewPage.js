class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.finishButton = "#finish";
  }

  async clickFinish() {
    await this.page.click(this.finishButton);
  }
}

module.exports = CheckoutOverviewPage;
