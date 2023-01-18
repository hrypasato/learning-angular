import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit{
  @ViewChild('miFormulario') miFormulario!:NgForm;
  
  initialForm = {
    producto:'',
    precio:20,
    existencias:10,
  }
  
  ngOnInit(): void {

  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid 
            && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido():boolean {
    return this.miFormulario?.controls['precio']?.touched 
            && this.miFormulario?.controls['precio']?.value < 0;
  }

  guardar(){
    console.log('Guardando...');
    this.miFormulario.resetForm({
      precio:0,
      existencias:0
    })
  }
}
