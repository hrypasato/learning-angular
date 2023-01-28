import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  miFormulario:FormGroup = this.fb.group({
    email:[ 'miguel@mail.com.ec', [ Validators.required, Validators.email ] ],
    password:[ '123456', [ Validators.required, Validators.minLength(6) ] ]
  })

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService:AuthService,
    private alertService:AlertService,
  ){ }


  onLogin(){
    const {email, password} = this.miFormulario.value;

    this.authService.login(email, password)
        .subscribe(resp => {
          if(resp.ok){
            this.router.navigateByUrl('/dashboard')
          }else{
            this.alertService.showError(resp.msg);
          }
        })
  }  
}
