import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit{

  heroe!:Heroe;

  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
  ){}


  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.heroeService.getHeroeById(id))
    ).subscribe( heroeResp => this.heroe = heroeResp );
  }

  onRegresar(){
    this.router.navigateByUrl('/heroes/listado');
  }
}
