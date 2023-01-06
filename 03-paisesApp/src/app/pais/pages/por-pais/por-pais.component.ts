import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino:string = '';
  isError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

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
        .buscarPais(this.termino)   //Realiza la peticion Http al servidor y retorna un objeto observable
        .subscribe( this.observer );//El resultado de de la solicitud llama a los métodos del objeto observer
  }

  sugerencias(valor:string){
    this.isError=false;
    this.paisService.buscarPais(valor)
        .subscribe(
          (paises) => this.paisesSugeridos = paises.splice(0,5),
          (err) => this.paisesSugeridos = []);

  }
}
