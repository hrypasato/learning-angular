import { Component } from '@angular/core';

interface Persona {
  nombre:string;
  favoritos: Favotito[];
}

interface Favotito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevoFavorito:string = '';

  persona:Persona = {
    nombre:'Miguel',
    favoritos: [
      { id:1, nombre:'Borderlands 2' },
      { id:2, nombre:'Batman Arkam City' },
      { id:3, nombre:'Assassins Creed Brothehood' },
    ]
  }


  guardar(){

  }

  agregarJuego(){
    if(this.nuevoFavorito.trim().length == 0){
      return;
    }

    const favorito: Favotito = {
      id:this.persona.favoritos.length + 1,
      nombre:this.nuevoFavorito.trim(),
    }

    this.persona.favoritos.push({ ...favorito });

    this.nuevoFavorito = "";
  }

  eliminar(index:number){
    this.persona.favoritos.splice(index, 1);
  }
}
