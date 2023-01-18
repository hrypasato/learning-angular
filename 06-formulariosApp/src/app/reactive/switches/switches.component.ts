import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit{

  miFormulario:FormGroup = this.fb.group({
    genero:['M', Validators.required],
    notificaciones:[false, Validators.required],
    condiciones:[false, Validators.requiredTrue]
  })

  persona = {
    genero:'F',
    notificaciones:true,
  }

  constructor(private fb:FormBuilder){}
  
  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona
    });

    this.miFormulario.valueChanges.subscribe(({genero, notificaciones}) => {
      this.persona = { genero, notificaciones };
    })
  }

  guardar(){
    console.log(this.miFormulario.value)
  }

}
