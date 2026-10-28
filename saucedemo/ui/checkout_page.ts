import { Locator, Page } from 'playwright'

export class CheckoutPage {
  readonly FIRST_NAME: Locator
  readonly LAST_NAME: Locator
  readonly POSTAL_CODE: Locator
  readonly CONTINUE: Locator
  readonly FINISH: Locator
  readonly COMPLETE_HEADER: Locator

  constructor(page: Page) {
    this.FIRST_NAME = page.locator('#first-name')
    this.LAST_NAME = page.locator('#last-name')
    this.POSTAL_CODE = page.locator('#postal-code')
    this.CONTINUE = page.locator('#continue')
    this.FINISH = page.locator('#finish')
    this.COMPLETE_HEADER = page.locator('.complete-header')
  }
}
