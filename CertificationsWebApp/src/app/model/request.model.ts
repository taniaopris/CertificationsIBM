export class RequestDTO {

    constructor(

        quarter: Quarter,
        participantName: string,
        certificationTitle: string,
        category: string,
        approvalStatus: ApprovalStatus,
        cost: number,
        businessJustification: string
        ) {

        this.quarter = quarter;
        this.participantName = participantName;
        this.certificationTitle = certificationTitle;
        this.category = category;
        this.approvalStatus = approvalStatus;
        this.cost = cost;
        this.businessJustification = businessJustification;
    }

    id: number;
    quarter: Quarter;
    participantName: string;
    certificationTitle: string;
    category: string;
    approvalStatus: ApprovalStatus;
    cost: number;
    businessJustification: string;
}

export enum ApprovalStatus {
    Approved = 'approved',
    Pending = 'pending',
    Rejected = 'rejected'
}

export enum Quarter {
    Q1 = 'Q1',
    Q2 = 'Q2',
    Q3 = 'Q3',
    Q4 = 'Q4'
}
