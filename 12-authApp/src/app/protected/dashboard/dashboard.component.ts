import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  get user():User{
    return this.authService.user;
  }

  constructor(
    private router:Router,
    private authService: AuthService,
  ){}

  logout(){
    this.authService.logout(); 
    this.router.navigateByUrl('/auth');
  }
}
