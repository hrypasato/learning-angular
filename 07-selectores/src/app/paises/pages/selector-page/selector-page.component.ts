import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises-service.service';
import { Country } from '../../interfaces/paises.interface'
import { switchMap, tap } from 'rxjs';
@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    region:['', Validators.required ],
    pais:['', Validators.required ],
    frontera:['', Validators.required ],
  })

  regiones:string[] = [];
  paises:Country[] = [];
  fronteras:Country[] = [];
  
  constructor(
    private fb:FormBuilder,
    private paisesService: PaisesServiceService,
  ){}

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;
    this.miFormulario.get('region')?.valueChanges.pipe(
      tap( (_) => this.miFormulario.get('pais')?.reset('')),
      switchMap(region => this.paisesService.getPaisesPorRegion(region))
     ).subscribe( resp => this.paises = resp);

    this.miFormulario.get('pais')?.valueChanges.pipe(
      tap((_) => this.miFormulario.get('frontera')?.reset('')),
      switchMap(codigo => this.paisesService.getPaisPorCodigo(codigo)),
      switchMap(pais => this.paisesService.getPaisesPorCodigos(pais?.borders!))
    ).subscribe( fronteras => this.fronteras = fronteras );
  }


  guardar(){
    console.log(this.miFormulario.value)
  }

}
