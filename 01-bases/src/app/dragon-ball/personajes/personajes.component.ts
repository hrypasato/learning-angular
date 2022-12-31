import { Component } from '@angular/core';
import { DragonBallService } from '../services/dragon-ball.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  get personajes() {
    return this.dragonBallService.personajes;
  }

  constructor(private dragonBallService:DragonBallService){}
}
