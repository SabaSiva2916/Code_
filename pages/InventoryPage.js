class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstAddToCartButton = ".inventory_item:nth-child(1) .btn_inventory";
    this.cartLink = ".shopping_cart_link";
  }

  async addFirstProductToCart() {
    await this.page.click(this.firstAddToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = InventoryPage;
