export class RequestDTO {

    constructor(
        id: number, 
        name: string, 
        quarter: string, 
        participantName: string,
        certificationTitle: string,
        category: string,
        approvalStatus: ApprovalStatus,
        cost: number,
        businessJustification: string
        ) {
        this.id = id
        this.quarter = quarter
        this.participantName = participantName
        this.certificationTitle = certificationTitle
        this.category = category
        this.approvalStatus = approvalStatus
        this.cost = cost
        this.businessJustification = businessJustification
    }

    id: number;
    quarter: string;
    participantName: string;
    certificationTitle: string;
    category: string;
    approvalStatus: ApprovalStatus;
    cost: number;
    businessJustification: string;
}

export enum ApprovalStatus {
    Approved = 'Approved',
    Pending = 'Pending',
    Rejected = 'Rejected'
}