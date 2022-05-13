import { Stage } from './stage';
import { Actor, ActorBuilder } from './actor';
import { ScreenplayWorld } from './cucumber/screenplay_world';

export function theActorNamed(name: string): Actor {
    return ActorBuilder.createAnActorCalled(name).whoActsIn(exports.stage);
}

export function theActorInTheSpotlight() :Actor {
    return ActorBuilder.theCurrentActor();
}

export function setTheStage(stage: Stage): void{
    exports.stage = stage;
}

export function setTheStageFromCucumber(stage: ScreenplayWorld): void{
    exports.stage = stage;
}