import { Locator, Page } from 'playwright'

export class LoginPage {
  readonly USERNAME: Locator
  readonly PASSWORD: Locator
  readonly LOGIN_BUTTON: Locator
  readonly ERROR: Locator

  private constructor(page: Page) {
    this.USERNAME = page.locator('#user-name')
    this.PASSWORD = page.locator('#password')
    this.LOGIN_BUTTON = page.locator('#login-button')
    this.ERROR = page.locator('[data-test="error"]')
  }

  static on(page: Page): LoginPage {
    return new LoginPage(page)
  }
}
