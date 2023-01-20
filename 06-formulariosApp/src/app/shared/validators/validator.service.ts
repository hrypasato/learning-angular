import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nombreApellidoPattern:string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern:string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  noStrider (control: FormControl):ValidationErrors | null {
    const valor:string = control.value?.trim().toLowerCase()

    if(valor === 'strider'){
      return {
        strider:true,
      }
    }
    return null;
  }

  camposIguales(value1: string, value2:string){
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const field1 = formGroup.get(value1)?.value;
      const field2 = formGroup.get(value2)?.value; 

      if( field1 !== field2){
        formGroup.get(field2)?.setErrors({same:false})
        return {
          same:false
        }
      }


      formGroup.get(field2)?.setErrors(null);

      return null;
    }
  }
}
