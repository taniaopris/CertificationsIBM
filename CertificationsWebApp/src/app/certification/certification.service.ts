import { CertificationDTO } from '../model/certification.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CertificationService {
    baseUrl = 'http://localhost:8080/api/certifications/'

    constructor(private http: HttpClient) { }

    // TO BE DELETED AFTER LINK TO BACKEND

    certifications: CertificationDTO[] = [
        new CertificationDTO(1, 'Title', 'Category', 100),
        new CertificationDTO(1, 'Title1', 'Category1', 200),
        new CertificationDTO(1, 'Title2', 'Category2', 300),
        new CertificationDTO(1, 'Title3', 'Category3', 400),
        new CertificationDTO(1, 'Title4', 'Category4', 500),
        new CertificationDTO(1, 'Title5', 'Category5', 600)
    ];

    public getCertificationById(id: number): Observable<CertificationDTO> {
        return this.http.get<CertificationDTO>(this.baseUrl + id)
    }

    public getAllCertifications(): Observable<CertificationDTO[]> {
        return of(this.certifications);
    }

    public addCertification(certification: CertificationDTO): Observable<CertificationDTO> {
        return this.http.post<CertificationDTO>(this.baseUrl, certification)
    }

    public updateCertification(certification: CertificationDTO): Observable<CertificationDTO> {
        return this.http.put<CertificationDTO>(this.baseUrl + certification.id, certification)
    }

    public deleteCertification(id: number): any {
        return this.http.delete(this.baseUrl + id)
    }

    // TO BE DELETED AFTER LINK TO BACKEND

    // public getCertificationById(id: number): Observable<CertificationDTO> {
    //     return this.http.get<CertificationDTO>(this.baseUrl + id)
    // }

    // public getAllCertifications(): Observable<CertificationDTO[]> {
    //     return this.http.get<CertificationDTO[]>(this.baseUrl + 'all')
    // }

    // public addCertification(certification: CertificationDTO): Observable<CertificationDTO> {
    //     return this.http.post<CertificationDTO>(this.baseUrl, certification)
    // }

    // public updateCertification(certification: CertificationDTO): Observable<CertificationDTO> {
    //     return this.http.put<CertificationDTO>(this.baseUrl + certification.id, certification)
    // }

    // public deleteCertification(id: number): any {
    //     return this.http.delete(this.baseUrl + id)
    // }
}