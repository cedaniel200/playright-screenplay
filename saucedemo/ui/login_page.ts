import { Locator, Page } from 'playwright'

export class LoginPage {
  readonly USERNAME: Locator
  readonly PASSWORD: Locator
  readonly LOGIN_BUTTON: Locator
  readonly ERROR: Locator

  constructor(page: Page) {
    this.USERNAME = page.locator('#user-name')
    this.PASSWORD = page.locator('#password')
    this.LOGIN_BUTTON = page.locator('#login-button')
    this.ERROR = page.locator('[data-test="error"]')
  }
}
