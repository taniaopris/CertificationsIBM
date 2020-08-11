export class UserDTO {

    constructor(id: number, name: string, password: string) {

        this.name = name;
        this.password = password;
    }

    name: string;
    password: string;
}
