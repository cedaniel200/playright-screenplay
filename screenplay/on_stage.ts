import { Actor, ActorBuilder } from './actor'
import { Stage } from './stage'
import { ScreenplayWorld } from './cucumber/screenplay_world'

let stage: Stage

export function theActorNamed(name: string): Actor {
  return ActorBuilder.createAnActorCalled(name).whoActsIn(stage)
}

export function theActorInTheSpotlight(): Actor {
  return ActorBuilder.theCurrentActor()
}

export function setTheStageFromCucumber(world: ScreenplayWorld): void {
  stage = Stage.fromCucumber(world)
}
