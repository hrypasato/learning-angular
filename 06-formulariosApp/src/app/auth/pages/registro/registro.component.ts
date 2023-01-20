import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validators/validator.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  get emailErrorMessage():string{
    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.['required']){
      return 'El email es requerido';
    }

    if(errors?.['pattern']){
      return 'No es un correo valido';
    }

    if(errors?.['emailTomado']){
      return 'El correo ya está en uso';
    }
    

    return '';
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['', [ Validators.required, Validators.pattern( this.validators.nombreApellidoPattern ) ]],
    email:['', [ Validators.required, Validators.pattern( this.validators.emailPattern )], [this.emailValidator ]],
    username:['', [ Validators.required, this.validators.noStrider ]],
    password:['', [ Validators.required, Validators.minLength(6) ]],
    password2:['', [ Validators.required, ]],
  },{
    validators:[ this.validators.camposIguales('password', 'password2') ],
  })

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorService,
    private emailValidator:EmailValidatorService, 
  ){ }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Henry Miguel',
      email: 'test1@test.com',
      username:'hrypasato',
      password:'123456',
      password2:'123456',
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid 
            && this.miFormulario.get(campo)?.touched;
  }

  onSubmit(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
