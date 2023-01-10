import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'vin'
})
export class VinPipe implements PipeTransform {
    transform(tieneVin: boolean) {
        return tieneVin ? 'Si tiene vin :D' : 'No tiene vin ;D'
    }

}