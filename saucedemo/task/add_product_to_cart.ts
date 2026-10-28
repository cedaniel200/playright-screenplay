import { Actor } from '../../screenplay/actor'
import { Task } from '../../screenplay/task'
import { InventoryPage } from '../ui/inventory_page'

export class AddProductToCart implements Task {
  constructor(private readonly product: string) {}

  async perform(actor: Actor): Promise<void> {
    const inventoryPage = new InventoryPage(actor.stage.page)
    await inventoryPage.addToCart(this.product).click()
  }

  static the(product: string): Task {
    return new AddProductToCart(product)
  }
}
