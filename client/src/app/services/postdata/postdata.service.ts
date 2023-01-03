import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newComputer } from 'src/app/models/newcomputer';
import { Computer } from '../../models/computer';
import { Other } from '../../models/other';
import { Phone } from '../../models/phone';


@Injectable({
  providedIn: 'root'
})
export class PostdataService {
  constructor(private http: HttpClient) { }




  urlbase: string = `http://localhost:3002`



  //// sector methods

  createSector(sectorName: string): Observable<any> {
    return this.http.post<any>(`${this.urlbase}/sectores`, { sectorName })
  }

  deleteSector(sectorId: string): Observable<any> {
    return this.http.delete<any>(`${this.urlbase}/sectores`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          sectorId
        },
      })
  }



  //// computers methods
  
  createComputer(Computer: newComputer, sectorId: string): Observable<any> {
    return this.http.post<any>(
      `${this.urlbase}/computers/${sectorId}`,
      Computer
    );
  }

  editComputer(computerId: string, newValues: any) {
    return this.http.put<any>(
      `${this.urlbase}/computers/editcomputer/${computerId}`,
      newValues
    );
  }

  deleteComputer(computerId: string): Observable<any> {
    return this.http.delete<any>(`${this.urlbase}/computers`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          computerId
        },
      })
  }

  //// others methods


  createOther(Other: any, sectorId: string): Observable<any> {
    return this.http.post<any>(
      `${this.urlbase}/others/${sectorId}`,
      Other
    );
  }

  editOther(otherId: string, newValues: any) {
    console.log(otherId, newValues)
    return this.http.put<any>(
      `${this.urlbase}/others/editother/${otherId}`,
      newValues
    );
  }

  deleteOther(otherId: string): Observable<any> {
    return this.http.delete<any>(`${this.urlbase}/others`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          otherId
        },
      })
  }


  //// phone methods


  createPhone(Phone: Phone, sectorId: string): Observable<any> {
    return this.http.post<any>(`${this.urlbase}/phones/${sectorId}`, Phone)
  }

  editPhone(phoneId: string, newValues: any) {
    return this.http.put<any>(
      `${this.urlbase}/phones/editphone/${phoneId}`,
      newValues
    );
  }

  deletePhone(phoneId: string): Observable<any> {
    return this.http.delete<any>(`${this.urlbase}/phones`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: {
          phoneId
        },
      })
  }


}
