export class CertificationDTO {

    constructor(
        id: number,
        title: string,
        category: string,
        cost: number
    ) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.cost = cost;
    }

    id: number;
    title: string;
    category: string;
    cost: number;
}