import { Actor } from './actor'

export interface Performable {
  perform(actor: Actor): Promise<void>
}
