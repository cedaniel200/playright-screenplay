import { Locator, Page } from '@playwright/test';

export class UserGitHubHomePage{
    readonly DASHBOARD: Locator;

    constructor(page:Page){
        this.DASHBOARD = page.locator('.dashboard');
    }
}