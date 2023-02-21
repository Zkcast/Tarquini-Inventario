import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dataHandlerService } from 'src/app/services/data handler/data-handler';
import { PostdataService } from 'src/app/services/postdata/postdata.service';
import { Sector } from 'src/app/models/sector';
import { Phone } from 'src/app/models/phone';
import { Computer } from 'src/app/models/computer';
import { Other } from 'src/app/models/other';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('newSector', { static: true }) newSector: ElementRef;

  constructor(
    private dataHandler: dataHandlerService,
    private router: Router
  ) { }

  public sectores: Sector[]

  public filterResults: (Phone | Computer | Other)[];

  ngOnInit(): void {

    this.dataHandler.setAllSectores();
    this.dataHandler.getSectores$.subscribe((res: Sector[]) => { this.sectores = res; this.sectores = this.sectores.sort() })

    this.dataHandler.getFilteredResults$.subscribe(res => {this.filterResults = res})

    this.fetchData()

  }


  fetchData() {

    if (this.sectores.length < 1) {
      setTimeout( () => {
          this.dataHandler.setAllSectores();
          this.fetchData();
          console.log('fetching..')
      }, 5000);
    } else {
      console.log('done')
      return
    }

  }

  cleanFilters() {
    this.dataHandler.cleanFilter()
  }
  showInfo() {
    console.log(this.sectores)
  }

  getRoute(element: (Phone | Computer | Other)): string {

    let object = element.inventario.toLowerCase()

    if (object.includes('computadora') || object.includes('pc')) {
      return `/detail/${element.id}`
    } else if (object.includes('telefono')) {
      return `/phonedetail/${element.id}`
    } else {
      return `/otherdetail/${element.id}`
    }

  }
}