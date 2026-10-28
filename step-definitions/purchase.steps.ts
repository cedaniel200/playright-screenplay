import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ScreenplayWorld } from '../screenplay/cucumber/screenplay_world'
import { setTheStageFromCucumber, theActorInTheSpotlight, theActorNamed } from '../screenplay/on_stage'
import { Customer } from '../saucedemo/model/customer'
import { User } from '../saucedemo/model/user'
import { AddProductToCart } from '../saucedemo/task/add_product_to_cart'
import { Authenticate } from '../saucedemo/task/authenticate'
import { CompleteCheckout } from '../saucedemo/task/complete_checkout'
import { GoToCart } from '../saucedemo/task/go_to_cart'
import { CartPage } from '../saucedemo/ui/cart_page'
import { CheckoutPage } from '../saucedemo/ui/checkout_page'
import { InventoryPage } from '../saucedemo/ui/inventory_page'
import { LoginPage } from '../saucedemo/ui/login_page'

Given('Cesar está en saucedemo', async function (this: ScreenplayWorld) {
  setTheStageFromCucumber(this)
  await this.page.goto('/')
})

When('Cesar inicia sesión como usuario estándar', async function () {
  await theActorNamed('Cesar').attemptsTo(
    Authenticate.with(new User('standard_user', 'secret_sauce'))
  )
})

When('Cesar inicia sesión como usuario bloqueado', async function () {
  await theActorNamed('Cesar').attemptsTo(
    Authenticate.with(new User('locked_out_user', 'secret_sauce'))
  )
})

Then('Cesar ve el inventario', async function (this: ScreenplayWorld) {
  await expect(new InventoryPage(this.page).INVENTORY_LIST).toBeVisible()
})

Then('Cesar ve el mensaje de usuario bloqueado', async function (this: ScreenplayWorld) {
  await expect(new LoginPage(this.page).ERROR).toContainText(
    'Sorry, this user has been locked out.'
  )
})

When('Cesar agrega una mochila al carrito', async function () {
  await theActorInTheSpotlight().attemptsTo(
    AddProductToCart.the('sauce-labs-backpack')
  )
})

When('Cesar abre el carrito', async function () {
  await theActorInTheSpotlight().attemptsTo(GoToCart.now())
})

Then('Cesar ve un producto en el carrito', async function (this: ScreenplayWorld) {
  await expect(new CartPage(this.page).CART_ITEM).toHaveCount(1)
})

When('Cesar completa el checkout con sus datos', async function () {
  await theActorInTheSpotlight().attemptsTo(
    CompleteCheckout.with(new Customer('Cesar', 'Daniel', '110111'))
  )
})

Then('Cesar ve la confirmación de la compra', async function (this: ScreenplayWorld) {
  await expect(new CheckoutPage(this.page).COMPLETE_HEADER).toHaveText(
    'Thank you for your order!'
  )
})
