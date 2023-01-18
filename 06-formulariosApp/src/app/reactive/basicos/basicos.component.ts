import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    precio:[0, [ Validators.required, Validators.min(0)]],
    existencias:[0, [ Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Maquinola',
      precio:62
    })
  }

  campoValido(campo:string){
    return this.miFormulario.controls[campo]?.errors &&
    this.miFormulario.controls[campo]?.touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }
}
