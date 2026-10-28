import { Actor } from '../../screenplay/actor'
import { Task } from '../../screenplay/task'
import { Customer } from '../model/customer'
import { CartPage } from '../ui/cart_page'
import { CheckoutPage } from '../ui/checkout_page'

export class CompleteCheckout implements Task {
  constructor(private readonly customer: Customer) {}

  async perform(actor: Actor): Promise<void> {
    const page = actor.stage.page
    const cartPage = CartPage.on(page)
    const checkoutPage = CheckoutPage.on(page)

    await cartPage.CHECKOUT.click()
    await checkoutPage.FIRST_NAME.fill(this.customer.firstName)
    await checkoutPage.LAST_NAME.fill(this.customer.lastName)
    await checkoutPage.POSTAL_CODE.fill(this.customer.postalCode)
    await checkoutPage.CONTINUE.click()
    await checkoutPage.FINISH.click()
  }

  static with(customer: Customer): Task {
    return new CompleteCheckout(customer)
  }
}
