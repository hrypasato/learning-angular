import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  private _texto:string = 'Este campo es requerido';
  private _color:string = 'red';

  htmlElement!: ElementRef<HTMLElement>;
  
  @Input() set color(valor:string){
    this._color = valor;
    this.setColor();
  }
  
  @Input() set mensaje(valor:string){
    this._texto = valor;
    this.setTexto();
  }

  @Input() set valido(valor:boolean){
    if(!valor){
      this.htmlElement.nativeElement.classList.add('d-none');
    }else{
      this.htmlElement.nativeElement.classList.remove('d-none');
    }
  }
  
  constructor(
    private eRef: ElementRef<HTMLElement>
    ) {
      this.htmlElement = eRef;
  }

  ngOnInit(): void {
    this.setColor();
    this.setTexto();
  }
    
    
  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }
    
  setTexto(){
    this.htmlElement.nativeElement.textContent = this._texto;  
  }

}
 