import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { ScreenplayWorld } from "../../screenplay/cucumber/screenplay_world";

import { Authenticate } from '../task/authenticate';
import { CreateRepository } from '../task/create_repository';
import { User } from '../model/user'
import { Repository } from '../model/repository';
import * as onStage from '../../screenplay/on_stage'

Given("Cesar wants to start versioning", async function (this: ScreenplayWorld) {
  onStage.setTheStageFromCucumber(this);
  const user = new User('cedaniel200', '12345678'); 
  
  await this.page.goto('https://github.com/login');
  await onStage.theActorNamed("Cesar").attemptsTo(
    Authenticate.theUser(user)
  );
  
});

When("Cesar creates a repository", async function (this: ScreenplayWorld) {
  const repositoty = new Repository('Repo', 'a description')

  await onStage.theActorInTheSpotlight().attemptsTo(
    CreateRepository.withTheFollowingData(repositoty) // TODO Falta por implementar
  );
  
});

Then("Cesar should see the repository created", async function (this: ScreenplayWorld) {
  // TODO Falta por implementar
});