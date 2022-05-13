import { expect } from '@playwright/test';
import { Actor } from '../../screenplay/actor';
import { Task } from '../../screenplay/task';
import { Repository } from '../model/repository';
import { UserGitHubHomePage } from '../ui/user_github_home_page';

export class CreateRepository implements Task {
    
    private repository: Repository

    constructor(repository: Repository){
        this.repository = repository;
    }

    async perform(actor: Actor) {
        let userGitHubHomePage = new UserGitHubHomePage(actor.stage.page);
        await expect(userGitHubHomePage.DASHBOARD).toBeVisible();

        // TODO falta seguir implementando
    }

    static withTheFollowingData(repository: Repository): Task {
        return new CreateRepository(repository);
    }
}