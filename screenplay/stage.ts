import { Page } from "playwright";
import { ScreenplayWorld } from "./cucumber/screenplay_world";

export class Stage {
    readonly page: Page;

    private constructor(page: Page){
        this.page = page;
    }

    static fromCucumber(screenplayWorld: ScreenplayWorld): Stage{
        return  new Stage(screenplayWorld.page);
    }

    static from(page: Page): Stage{
        return  new Stage(page);
    }
}