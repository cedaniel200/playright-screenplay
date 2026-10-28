import { Locator, Page } from 'playwright'

export class CartPage {
  readonly CART_ITEM: Locator
  readonly CHECKOUT: Locator

  constructor(page: Page) {
    this.CART_ITEM = page.locator('.cart_item')
    this.CHECKOUT = page.locator('#checkout')
  }
}
