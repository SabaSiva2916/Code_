class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = "#first-name";
    this.lastNameField = "#last-name";
    this.postalCodeField = "#postal-code";
    this.continueButton = "#continue";
  }

  async enterFirstName(firstname) {
    await this.page.fill(this.firstNameField, firstname);
  }

  async enterLastName(lastname) {
    await this.page.fill(this.lastNameField, lastname);
  }

  async enterPostalCode(postalcode) {
    await this.page.fill(this.postalCodeField, postalcode);
  }

  async clickContinue() {
    await this.page.click(this.continueButton);
  }

  async fillCheckoutInfo(firstname, lastname, postalcode) {
    await this.enterFirstName(firstname);
    await this.enterLastName(lastname);
    await this.enterPostalCode(postalcode);
    await this.clickContinue();
  }
}

module.exports = CheckoutPage;
