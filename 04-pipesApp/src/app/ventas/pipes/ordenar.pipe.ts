import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(carros: Car[], metodo:string = ''): Car[] {
    switch (metodo) {
      case 'nombre':
        return carros.sort( (a, b) => a.brand > b.brand ? 1 : -1);

      case 'year':
        return carros.sort( (a, b) => a.year > b.year ? 1 : -1);  
          
      case 'color':
        return carros.sort( (a, b) => a.color > b.color ? 1 : -1);  

      default:
        break;
    }
    
    return carros;
  }

}
