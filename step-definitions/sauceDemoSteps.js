const { Given, When, Then } = require("@cucumber/cucumber");
const BrowserUtils = require("../utils/BrowserUtils");
const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");
const CartPage = require("../pages/CartPage");
const CheckoutPage = require("../pages/CheckoutPage");
const CheckoutOverviewPage = require("../pages/CheckoutOverviewPage");
const CheckoutCompletePage = require("../pages/CheckoutCompletePage");

let browserUtils;
let loginPage;
let inventoryPage;
let cartPage;
let checkoutPage;
let checkoutOverviewPage;
let checkoutCompletePage;

Given("I am on the SauceDemo login page", async function () {
  browserUtils = new BrowserUtils();
  await browserUtils.launchBrowser();
  loginPage = new LoginPage(browserUtils.getPage());
  await loginPage.navigateToLoginPage();
});

When(
  "I login with username {string} and password {string}",
  async function (username, password) {
    await loginPage.login(username, password);
  },
);

When("I add the first product to the cart", async function () {
  inventoryPage = new InventoryPage(browserUtils.getPage());
  await inventoryPage.addFirstProductToCart();
});

When("I go to the cart", async function () {
  await inventoryPage.goToCart();
});

When("I proceed to checkout", async function () {
  cartPage = new CartPage(browserUtils.getPage());
  await cartPage.proceedToCheckout();
});

When(
  "I enter checkout information with firstname {string}, lastname {string}, postalcode {string}",
  async function (firstname, lastname, postalcode) {
    checkoutPage = new CheckoutPage(browserUtils.getPage());
    await checkoutPage.fillCheckoutInfo(firstname, lastname, postalcode);
  },
);

When("I continue to the overview", async function () {
  // Already done in fillCheckoutInfo
});

When("I finish the order", async function () {
  checkoutOverviewPage = new CheckoutOverviewPage(browserUtils.getPage());
  await checkoutOverviewPage.clickFinish();
});

Then("I should see the order confirmation page", async function () {
  checkoutCompletePage = new CheckoutCompletePage(browserUtils.getPage());
  const message = await checkoutCompletePage.getConfirmationMessage();
  if (!message.toLowerCase().includes("thank you for your order")) {
    throw new Error("Order confirmation not found");
  }
});

Then("I take a screenshot of the confirmation", async function () {
  await checkoutCompletePage.takeScreenshot("order-confirmation.png");
  await browserUtils.closeBrowser();
});
