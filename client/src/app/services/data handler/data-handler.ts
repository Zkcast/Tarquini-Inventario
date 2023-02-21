import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Computer } from 'src/app/models/computer';
import { Other } from 'src/app/models/other';
import { Phone } from 'src/app/models/phone';
import { Sector } from 'src/app/models/sector';
import { SectorContent } from 'src/app/models/SectorContent';
import { FetchDataService } from '../fetchdata/fetch-data.service';


@Injectable({
  providedIn: 'root'
})
export class dataHandlerService {

  constructor(private data: FetchDataService) { }

  /////////// load sectores data

  //get all sectores
  private sectores$ = new BehaviorSubject<Sector[]>([]);
  get getSectores$(): Observable<Sector[]> { return this.sectores$.asObservable(); }
  setAllSectores(): void {
    this.data.getAllSectores().subscribe((res) => { this.sectores$.next(res) });
  }
  //get sector by id
  private sector$ = new BehaviorSubject<SectorContent | null>(null);
  get getSector$(): Observable<SectorContent | null> { return this.sector$.asObservable() }
  setSector(id: string): void {
    this.data.getSector(id).subscribe((res) => { this.sector$.next(res) });
  }


  ///////////get all elements and apply filters

  private filterResult$ = new BehaviorSubject<(Phone | Computer | Other)[]>([]);
  get getFilteredResults$(): Observable<(Phone | Computer | Other)[]> { return this.filterResult$.asObservable(); }


  getAllElements(): void {
    this.data.getAll().subscribe((res) => { this.filterResult$.next(res) })
  }

  cleanFilter(): void {
    this.filterResult$.next([])
  }

  filterByLetters(letters: string): void {
    this.data.getAll().subscribe((res) => {

      let result1 = res.filter((e: (Phone | Computer | Other)) => e.inventario.toLowerCase().startsWith(letters))
      let result2 = res.filter((e: (Phone | Computer | Other)) => e.tipo === 'Other' && e.nombre?.toLowerCase().startsWith(letters) )
      let result3 = res.filter((e: (Phone | Computer | Other)) => e.codigodebarras === letters)

      this.filterResult$.next([...result1, ...result2, ...result3])
    }
    )
  }


  /////////// load puestos data

  //get all puestos
  // private puestos$ = new BehaviorSubject<any>([]);
  // get getPuestos$(): Observable<any> { return this.puestos$.asObservable(); }
  // setAllPuestos(): void {
  //   this.data.getAllPuestos().subscribe((res) => {console.log(res); this.puestos$.next(res)});
  // }
  // //get puesto by id
  // private puesto$ = new BehaviorSubject<any>([]);
  // get getPuesto$(): Observable<any> { return this.puesto$.asObservable(); }
  // setPuesto(id: string): void {
  //   this.data.getPuesto(id).subscribe((res) => this.puesto$.next(res));
  // }


  /////////// load selected element detail

  private detail$ = new BehaviorSubject<(Phone | Computer | Other | null)>(null);
  get getDetail$(): Observable<(Phone | Computer | Other | null)> { return this.detail$.asObservable(); }

  setComputer(id: string): void {
    this.data.getComputer(id).subscribe((res) => this.detail$.next(res));
  }

  setPhone(id: string): void {
    this.data.getPhone(id).subscribe((res) => this.detail$.next(res));
  }

  setOther(id: string): void {
    this.data.getOther(id).subscribe((res) => this.detail$.next(res));
  }

}
