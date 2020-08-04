export class UserDTO {

    constructor(id: number, name: string, role: string) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    id: number;
    name: string;
    role: string;

    // what should I do with role? roleId or prop?
}
