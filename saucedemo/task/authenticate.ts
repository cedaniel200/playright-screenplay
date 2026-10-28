import { Actor } from '../../screenplay/actor'
import { Task } from '../../screenplay/task'
import { User } from '../model/user'
import { LoginPage } from '../ui/login_page'

export class Authenticate implements Task {
  constructor(private readonly user: User) {}

  async perform(actor: Actor): Promise<void> {
    const loginPage = LoginPage.on(actor.stage.page)
    await loginPage.USERNAME.fill(this.user.username)
    await loginPage.PASSWORD.fill(this.user.password)
    await loginPage.LOGIN_BUTTON.click()
  }

  static with(user: User): Task {
    return new Authenticate(user)
  }
}
