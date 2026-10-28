import { Actor } from '../../screenplay/actor'
import { Task } from '../../screenplay/task'
import { InventoryPage } from '../ui/inventory_page'

export class GoToCart implements Task {
  async perform(actor: Actor): Promise<void> {
    const inventoryPage = InventoryPage.on(actor.stage.page)
    await inventoryPage.CART_LINK.click()
  }

  static now(): Task {
    return new GoToCart()
  }
}
