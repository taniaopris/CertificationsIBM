export class CertificationDTO {

    constructor(

        title: string,
        category: string,
        cost: number
    ) {
        this.title = title;
        this.category = category;
        this.cost = cost;
    }

    id: number;
    title: string;
    category: string;
    cost: number;
}
