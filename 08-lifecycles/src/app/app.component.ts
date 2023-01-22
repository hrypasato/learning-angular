import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '08-lifecycles';

  mostrar:boolean = true;

  switchMostrar(){
    this.mostrar = !this.mostrar;
  }
}
