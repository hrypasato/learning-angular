import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['username56', [Validators.required, Validators.minLength(5)]],
    email: ['test1@mail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alertService:AlertService,
  ) { }

  onRegister() {
    const { name, email, password } = this.miFormulario.value;
    this.authService.register(name, email, password)
      .subscribe(resp => {
        if (resp.ok) {
          this.router.navigateByUrl('/dashboard')
        } else {
          this.alertService.showError(resp.msg);
        }
      })
    //this.router.navigateByUrl('/dashboard')
  }
}
