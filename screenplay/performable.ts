import { Actor } from "../screenplay/actor";

export interface Performable {
    perform(actor: Actor): void;
}