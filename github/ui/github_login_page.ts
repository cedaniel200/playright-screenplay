import { Locator, Page } from '@playwright/test';

export class GitHubLoginPage {
  readonly USERNAME_OR_EMAIL_ADDRESS: Locator;
  readonly PASSWORD: Locator;
  readonly SIGN_IN: Locator;

  constructor(page: Page) {
    this.USERNAME_OR_EMAIL_ADDRESS = page.locator('input[name="login"]');
    this.PASSWORD = page.locator('input[name="password"]');
    this.SIGN_IN = page.locator('input:has-text("Sign in")');
  }

}