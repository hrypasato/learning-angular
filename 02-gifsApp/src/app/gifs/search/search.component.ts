import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private gifsService:GifsService){}

  @ViewChild('termino') txtTermino!:ElementRef<HTMLInputElement>;
  buscar(){
    const texto = this.txtTermino.nativeElement.value;

    if(texto.trim().length === 0){
      return;
    }

    this.gifsService.buscarGifs(texto);
    this.txtTermino.nativeElement.value = '';
  }
}
