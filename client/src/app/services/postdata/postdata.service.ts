import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newComputer } from 'src/app/models/newcomputer';
import { Computer } from '../../models/computer';
import { Other } from '../../models/other';
import { Phone } from '../../models/phone';
import { environment } from 'src/environments/environment';
import { PostNewComputer, PostNewOther, PostNewPhone} from 'src/app/models/ServerPostsResponses';
@Injectable({
  providedIn: 'root'
})
export class PostdataService {
  constructor(private http: HttpClient) { }




  urlbase: string = `http://localhost:3002`



  //// sector methods

  createSector(sectorName: string): Observable<any> {
    return this.http.post<any>(`${environment.urlbase}/sectores`, { sectorName })
  }

  deleteSector(sectorId: string): Observable<any> {
    return this.http.delete<any>(`${environment.urlbase}/sectores`,
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
  
  createComputer(Computer: newComputer, sectorId: string): Observable<PostNewComputer> {
    return this.http.post<PostNewComputer>(
      `${environment.urlbase}/computers/${sectorId}`,
      Computer
    );
  }

  editComputer(computerId: string, newValues: any) {
    return this.http.put<any>(
      `${environment.urlbase}/computers/editcomputer/${computerId}`,
      newValues
    );
  }

  deleteComputer(computerId: string): Observable<any> {
    return this.http.delete<any>(`${environment.urlbase}/computers`,
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


  createOther(Other: any, sectorId: string): Observable<PostNewOther> {
    return this.http.post<PostNewOther>(
      `${environment.urlbase}/others/${sectorId}`,
      Other
    );
  }

  editOther(otherId: string, newValues: any) {
    return this.http.put<{msg: string}>(
      `${environment.urlbase}/others/editother/${otherId}`,
      newValues
    );
  }

  deleteOther(otherId: string): Observable<any> {
    return this.http.delete<{msg: string}>(`${environment.urlbase}/others`,
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


  createPhone(Phone: Phone, sectorId: string): Observable<PostNewPhone> {
    return this.http.post<PostNewPhone>(`${environment.urlbase}/phones/${sectorId}`, Phone)
  }

  editPhone(phoneId: string, newValues: any) {
    return this.http.put<{msg: string}>(
      `${environment.urlbase}/phones/editphone/${phoneId}`,
      newValues
    );
  }

  deletePhone(phoneId: string): Observable<any> {
    return this.http.delete<{msg: string}>(`${environment.urlbase}/phones`,
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
