import { Stage } from "./stage";
import { Performable } from "./performable"

export class ActorBuilder {

    private static currentActor: Actor;
    private name: string;
    
    private constructor(name: string){
        this.name = name;
    }

    static createAnActorCalled(name: string) : ActorBuilder {
        return new ActorBuilder(name);
    }

    whoActsIn(stage: Stage): Actor {
        ActorBuilder.currentActor = new Actor(this.name, stage);
        return ActorBuilder.currentActor;
    }

    static theCurrentActor(){
        return this.currentActor;
    }

}

export class Actor {
    readonly name: string;
    readonly stage: Stage;

    constructor(name: string, stage: Stage){
        this.name = name;
        this.stage = stage;
    }

    async attemptsTo(...toDo:Performable[]){
        for (const task of toDo) {
            if (task != null) {
               await task.perform(this);
            }
        }
    }
}