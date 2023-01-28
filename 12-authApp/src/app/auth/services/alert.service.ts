import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

const ERROR_MESSAGE = 'Se ha producido un error';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showError(mensage:string = ERROR_MESSAGE){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: mensage
    });
  }
}
