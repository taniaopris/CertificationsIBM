import { CertificationDTO } from '../model/certification.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
// @ts-ignore
export class CertificationService {
    baseUrl = 'http://localhost:8080/api/certifications/';

    constructor(private http: HttpClient) { }

    public getCertificationById(id: number): Observable<CertificationDTO> {
        return this.http.get<CertificationDTO>(this.baseUrl + id);
    }

    public getAllCertifications(): Observable<CertificationDTO[]> {
        return this.http.get<CertificationDTO[]>(this.baseUrl + 'all');
    }

    public addCertification(certification: CertificationDTO): Observable<CertificationDTO> {
        return this.http.post<CertificationDTO>(this.baseUrl, certification);
    }

    public updateCertification(certification: CertificationDTO): Observable<CertificationDTO> {
        return this.http.put<CertificationDTO>(this.baseUrl + certification.id, certification);
    }

    public deleteCertification(id: number): any {
        return this.http.delete(this.baseUrl + id);
    }
}
