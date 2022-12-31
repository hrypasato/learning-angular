import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dragon-ball.interface";

@Injectable()
export class DragonBallService {

    private _personajes:Personaje [] = [
        {
          nombre: 'Goku',
          poder:15000
        },
        {
          nombre:'Vegeta',
          poder:14000
        }
      ]

    get personajes():Personaje[] {
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje(personaje: Personaje){
      this._personajes.push(personaje);
    }
}