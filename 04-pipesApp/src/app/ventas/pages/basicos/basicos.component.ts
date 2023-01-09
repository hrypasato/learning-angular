import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower:string = 'miguel';
  nombreUpper:string = 'MIGUEL';
  nombreCompleto:string = 'henrY miGuEl';

  fecha:Date = new Date(); 

}
