import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  isEditing!: boolean;

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    }
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.isEditing = this.router.url.includes('editar')

    if (!this.isEditing) {
      return;
    }

    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroeById(id))
    ).subscribe(heroe => this.heroe = heroe);

  }


  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      //Actializando
      this.heroesService
        .updateHeroe(this.heroe)
        .subscribe(heroe => this.mostrarSnackbar('Actualizado correctamente'));
    } else {
      //Creando
      this.heroesService.createNewHeroe(this.heroe).subscribe(heroe => {
        this.mostrarSnackbar('Creado correctamente');
        this.router.navigateByUrl(`/heroes/${heroe.id}`);
      })
    }
  }

  borrar() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe,
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {

        this.heroesService.deleteHeroe(this.heroe.id!).subscribe(resp => {
          this.mostrarSnackbar('Registro eliminado')
          this.router.navigateByUrl('/heroes')
        });

      }
    })
  }


  mostrarSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Ok!', {
      duration: 2500
    })
  }

}
