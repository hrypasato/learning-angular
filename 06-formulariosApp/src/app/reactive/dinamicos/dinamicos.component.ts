import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {
  miFormulario:FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['Borderlands 2', Validators.required],
      ['Batman Arkam City', Validators.required],
      ['Dead or Alive 5', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritos(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
  ){}

  campoValido(campo:string){
    return this.miFormulario.controls[campo]?.errors 
          && this.miFormulario.controls[campo]?.touched;
  }


  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }

    this.favoritos.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
     
  }

  borrar(i:number){
    this.favoritos.removeAt(i);
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
  }

}
