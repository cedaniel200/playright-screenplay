import { Locator, Page } from 'playwright'

export class InventoryPage {
  readonly INVENTORY_LIST: Locator
  readonly CART_LINK: Locator
  readonly CART_BADGE: Locator

  private constructor(page: Page) {
    this.INVENTORY_LIST = page.locator('.inventory_list')
    this.CART_LINK = page.locator('.shopping_cart_link')
    this.CART_BADGE = page.locator('.shopping_cart_badge')
  }

  static on(page: Page): InventoryPage {
    return new InventoryPage(page)
  }

  addToCart(product: string): Locator {
    return this.INVENTORY_LIST.locator(`[data-test="add-to-cart-${product}"]`)
  }
}
