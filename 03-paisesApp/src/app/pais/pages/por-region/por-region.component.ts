import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones:string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS', 'CEFTA','NAFTA','SAARC'];
  regionActiva:string = '';
  paises: Country[] = [];
  isError: boolean = false;

  constructor(private paisService:PaisService){}

  observer = {
    //funcion que se ejecuta si la solicitud es exitosa
    next: (paisesResponse:Country[]) => {
      this.paises = paisesResponse;
      console.log(paisesResponse)
    },
    //funcion que se ejecuta en caso de error
    error: (err: Error) => {
      this.isError = true;
    }
  }

  getClaseCss(region:string){
    return region === this.regionActiva 
                      ? 'btn btn-sm btn-primary' 
                      : 'btn btn-sm btn-outline-primary'
  }

  activarRegion(region: string){

    if(region === this.regionActiva) {
      return
    }

    this.regionActiva = region;
    this.paisService.buscarRegion(this.regionActiva).subscribe(this.observer);
  }


}
