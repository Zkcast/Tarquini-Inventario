import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sector } from 'src/app/models/sector';
import { SectorContent } from 'src/app/models/SectorContent';
import { Computer } from 'src/app/models/computer';
import { Phone } from 'src/app/models/phone';
import { Other } from 'src/app/models/other';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {


  urlbase: string = `http://localhost:3002`
  constructor(private http: HttpClient) { }

  /////////// Fetch sectores data
  getAllSectores(): Observable<Sector[]> {
    return this.http.get<Sector[]>(
      `${environment.urlbase}/sectores`
    );
  }

  getSector(id: string): Observable<SectorContent> {
    return this.http.get<SectorContent>(
      `${environment.urlbase}/sectores/${id}`
    );
  }

  
  /////////// Fetch puestos data
  // getAllPuestos(): Observable<any> {
  //   return this.http.get<any>(
  //     `${environment.urlbase}/puestos`
  //   );
  // }

  // getPuesto(id: string): Observable<any> {
  //   return this.http.get<any>(
  //     `${environment.urlbase}/puestos/${id}`
  //   );
  // }

  /////////// Fetch elements data

  getComputer(id: string): Observable<Computer> {
    return this.http.get<Computer>(
      `${environment.urlbase}/computers/${id}`
      );
  }

  getPhone(id: string): Observable<Phone> {
    return this.http.get<Phone>(
      `${environment.urlbase}/phones/${id}`
      );
  }

  getOther(id: string): Observable<Other> {
    return this.http.get<Other>(
      `${environment.urlbase}/others/${id}`
      );
  }


  ////////// Fetch all items
  getAll(): Observable<(Phone | Computer | Other)[]>{
    return this.http.get<(Phone | Computer | Other)[]>(`${environment.urlbase}/sectores/getall`)
  }
}
