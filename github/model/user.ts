
export class User {
    readonly username;
    readonly password;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }
}