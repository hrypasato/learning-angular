import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get usuario():string {
    return this.authService.auth.usuario
  }

  constructor(
    private router:Router,
    private authService:AuthService,
  ){}

  logout(){
    console.log('Saliendo de la aplicacion');
    this.router.navigate(['./auth'])
  }

}
