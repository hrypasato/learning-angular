import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router:Router,
    private authService: AuthService,
  ){}

  login(){
    //Verificar que el usuario existe
    console.log('Verificando usario');
    this.authService.login().subscribe(console.log);
    this.router.navigate(['./heroes'])
  }
}
