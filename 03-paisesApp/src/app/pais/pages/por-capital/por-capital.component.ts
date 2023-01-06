import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino:string = '';
  isError: boolean = false;
  paises: Country[] = [];

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

    /**
   * 
   * @param termino 
   * Es una método que realiza utiliza el servicio de paises para 
   * consultar por http.
   * 
   */
    buscar(termino: string){
      this.isError=false;
      this.termino = termino;
      this.paisService
          .buscarCapital(this.termino)   //Realiza la peticion Http al servidor y retorna un objeto observable
          .subscribe( this.observer );//El resultado de de la solicitud llama a los métodos del objeto observer
    }
  
}
