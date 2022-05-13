import { Actor } from '../../screenplay/actor';
import { Task } from '../../screenplay/task';
import { User } from '../model/user';
import { GitHubLoginPage } from '../ui/github_login_page';

export class Authenticate implements Task {
    
    private user: User;

    constructor(user: User){
        this.user = user;
    }

    async perform(actor: Actor) {
        let gitHubLoginPage = new GitHubLoginPage(actor.stage.page);
        await gitHubLoginPage.USERNAME_OR_EMAIL_ADDRESS.fill(this.user.username);
        await gitHubLoginPage.PASSWORD.fill(this.user.password);
        await gitHubLoginPage.SIGN_IN.click()
    }    
    
    static theUser(user: User): Task {
        return new Authenticate(user);
    }
    
}