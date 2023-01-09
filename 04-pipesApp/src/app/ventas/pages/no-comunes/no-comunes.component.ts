import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string = 'Miguel';
  genero:string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }


  cambiarCliente(){
    if(this.genero == 'masculino'){
      this.nombre = 'Angelica';
      this.genero = 'femenino';
    }else{
      this.nombre = 'Miguel';
      this.genero = 'masculino';
    }
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Marcelo', 'Santiago', 'Adriana', 'Sara', 'Luis'];
  clientesMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': ' tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //Keyvalue pipe
  persona = {
    id:'0431264569',
    nombre:'Miguel',
    lugar:'San Fernando',
  }

  //Json pipe
  heroes = [
    {
      nombre:'Superman',
      vuela: true,
    },
    {
      nombre:'Robin',
      vuela: false,
    },
    {
      nombre:'Flash',
      vuela: false,
    }
  ]

  //Async pipe
  miObservable = interval(1000);
  
}
