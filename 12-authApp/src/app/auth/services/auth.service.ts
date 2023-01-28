import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environments } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/authResponse.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user!:User;


  get user(){
    return { ...this._user };
  }

  private baseUrl:string = environments.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }


  register(name:string, email:string, password:string):Observable<AuthResponse>{
    const url = `${this.baseUrl}/auth/new`;
    const body = { name, email, password };
    
    return this.http.post<AuthResponse>(url, body)
                .pipe(
                  tap( resp => this.checkResponseOk(resp) ),
                  catchError((errorResponse:HttpErrorResponse) => of(errorResponse.error)),
                );
  }

  login(email:string, password:string): Observable<AuthResponse>{
    const url = `${this.baseUrl}/auth`;
    const body = { email, password }; 

    return this.http.post<AuthResponse>(url, body)
              .pipe(
                tap(resp => this.checkResponseOk(resp)),
                //map(resp => resp), //Opcional
                catchError((errorResponse:HttpErrorResponse) => of(errorResponse.error)),
              );
  }

  validarToken():Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders().set('x-token', this.getToken());
    return this.http.get<AuthResponse>(url, { headers })
                    .pipe(
                      tap(resp => this.checkResponseOk(resp)),
                      map(resp => resp.ok ),
                      catchError(err => of(false)),
                    );
  }

  logout(){
    localStorage.clear();
  }

  private checkResponseOk(resp: AuthResponse){
    if(resp.ok){
      this.saveToken(resp.token!);
      this.saveUser(resp);
    }
  }

  private saveUser(authResponse:AuthResponse){
    this._user = { 
      name:authResponse.name!, 
      uid: authResponse.uid! 
    };
  }

  private saveToken(token:string){
    localStorage.setItem('token', token);
  }

  private getToken():string {
    return localStorage.getItem('token') || '';
  }
}
