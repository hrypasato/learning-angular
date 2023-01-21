import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {


  private baseUrl = 'https://restcountries.com/v3.1/';

  private _regiones: string[] =['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones():string[]{
     return [ ...this._regiones ];
  }

  constructor(
    private http: HttpClient,
  ) { }

  getPaisesPorRegion( region:string ): Observable<Country[]>{
    const params = new HttpParams().set('fields', 'cca2,name');
    return this.http.get<Country[]>(`${this.baseUrl}/region/${region}`, {
      params
    });

  }

  getPaisPorCodigo(codigo:string): Observable<Country | null>{

    if(!codigo){
      return of(null); 
    }

    const params = new HttpParams().set('fields', 'borders');
    const url = `${this.baseUrl}/alpha/${codigo}`;

    return this.http.get<Country>(url, { params });
  }


  getPaisPorCode(codigo: string ):Observable<Country>{
    const params = new HttpParams().set('fields', 'cca2,name,borders');
    const url = `${this.baseUrl}/alpha/${codigo}`;

    return this.http.get<Country>(url, { params });
  }

  getPaisesPorCodigos(borders:string[]): Observable<Country[]>{
    if(!borders){
      return of([]);
    }
    const peticiones: Observable<Country>[] = [];

    borders.forEach(codigo => {
      const peticion = this.getPaisPorCode(codigo);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);

  }
}
