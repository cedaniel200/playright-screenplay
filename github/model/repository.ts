export class Repository {
    readonly name;
    readonly description;

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
    }
}