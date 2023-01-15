import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environments.baseUrl;
  private _auth:Auth | undefined;

  get auth():Auth{
    return { ...this._auth! };
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion():Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
                    .pipe(
                      map(auth => {
                        this._auth = auth;
                        return true;
                      })
                    );
  }

  login():Observable<Auth>{
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
                    .pipe(
                      /**Todos los resultados de la petición pararán por el operador TAP */
                      tap((resp:Auth) => this._auth = resp),
                      tap( auth=> localStorage.setItem('token', auth.id)),
                    );
  }
}
