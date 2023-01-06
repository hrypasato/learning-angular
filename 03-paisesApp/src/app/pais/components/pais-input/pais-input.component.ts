import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{
  @Input() placeholder = '';
  
  @Output() onEnter:EventEmitter<string> = new EventEmitter() ;
  @Output() onDebounce:EventEmitter<string> = new EventEmitter() ;

  debouncer: Subject<string> = new Subject(); 

  /**
   * variable asociada al input usando ngModel
   */
  termino:string = '';

  ngOnInit(): void {
    /**
     * Escucha los cambios realizados en el input
     * emite un valor 1/2 segundo despues de que terminara de presionar las teclas 
     */
    this.debouncer
    .pipe(debounceTime(500)) //Espera 1/2 segundo despues de finalizado la emision 
    .subscribe(valor => {     
      this.onDebounce.emit(valor);
    });
  }

  /**
   * Se ejecuta cada vez que presiona una tecla
   */
  teclaPresionada(){
    /**
     * Emite el valor actual del termino
     */
    this.debouncer.next(this.termino);
  }

  /**
   * método que se ejecuta cuando al submit del formulario 
   */
  buscar(){
    /**
     * Emite un el contenido de la variabla termino hacia componente el padre
     */
    this.onEnter.emit(this.termino);
  }
}
