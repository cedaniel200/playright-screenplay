import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber'
import { Browser, chromium, devices } from 'playwright'
import { ScreenplayWorld } from './screenplay/cucumber/screenplay_world'

let browser: Browser

BeforeAll(async () => {
  browser = await chromium.launch({ headless: process.env.HEADED !== 'true' })
})

AfterAll(async () => {
  if (browser) {
    await browser.close()
  }
})

Before(async function (this: ScreenplayWorld) {
  this.context = await browser.newContext({
    ...devices['Desktop Chrome'],
    baseURL: 'https://www.saucedemo.com',
  })
  this.page = await this.context.newPage()
})

After(async function (this: ScreenplayWorld) {
  await this.page.close()
  await this.context.close()
})
