import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dragon-ball.interface';
import { DragonBallService } from '../services/dragon-ball.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  nuevo:Personaje = {
    nombre:'',
    poder:0
  }

  constructor(private dragonBallService:DragonBallService){}

  agregar():void{

    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    this.dragonBallService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre:'',
      poder:0
    }
  }
}
