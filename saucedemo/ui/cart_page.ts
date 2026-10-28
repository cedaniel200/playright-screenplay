import { Locator, Page } from 'playwright'

export class CartPage {
  readonly CART_ITEM: Locator
  readonly CHECKOUT: Locator

  private constructor(page: Page) {
    this.CART_ITEM = page.locator('.cart_item')
    this.CHECKOUT = page.locator('#checkout')
  }

  static on(page: Page): CartPage {
    return new CartPage(page)
  }
}
