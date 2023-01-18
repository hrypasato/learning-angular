import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector:'[customMin][ngModel]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi:true, 
    }]
})
export class CustomMinDirective implements Validator{
    @Input() minimo!:number;

    constructor(){
        console.log('Directiva', this.minimo)
    }
    validate(control: FormControl): ValidationErrors | null {
        const inputValue = control.value;

        console.log(inputValue);
        console.log('minimo', this.minimo);
        return (inputValue < this.minimo) ? { 'custom':true } : null;
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }

}