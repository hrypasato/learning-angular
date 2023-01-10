import { Component } from '@angular/core';
import { Car, Color } from '../../interfaces/car.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

    isMayus:boolean = true;
    
    ordenarPor:string = '';

    carros: Car[] = [
      {
        brand:'Volvo',
        color:Color.azul,
        vin:true,
        year:2014
      },
      {
        brand:'Toyota',
        color:Color.verde,
        vin:false,
        year:2015
      },
      {
        brand:'Chevy',
        color:Color.rojo,
        vin:false,
        year:2012
      },
      {
        brand:'Ram',
        color:Color.verde,
        vin:true,
        year:2018
      },
    ]



    toggleMayusculas(){
      this.isMayus = !this.isMayus;
    }

    onOrdenarPor(campo:string){
      console.log(campo)
      this.ordenarPor = campo;
    }
}
