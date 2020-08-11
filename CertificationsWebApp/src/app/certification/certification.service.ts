import { CertificationDTO } from './../model/certification.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CertificationService {
    baseUrl = 'https://localhost:8443';

    constructor(private http: HttpClient) { }



    certifications: CertificationDTO[];


    public getAllCertifications(): any {

        return this.http.get(`https://localhost:8443/api/certifications/allCertifications`);
    }

    public deleteCertification(id: number): any {
      return this.http.delete<string>(`https://localhost:8443/api/certifications/admin/deleteCertification/${id}`);
  }


    public addCertification(certification: CertificationDTO): Observable<CertificationDTO> {
        return this.http.post<CertificationDTO>(this.baseUrl, certification);
    }

    public updateCertification(id: number, certificationDTO: CertificationDTO): Observable<CertificationDTO> {

        // tslint:disable-next-line: max-line-length
        return this.http.put<CertificationDTO>(`https://localhost:8443/api/certifications/admin/deleteCertification/${id}`,certificationDTO);
    }



}
