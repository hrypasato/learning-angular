import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private baseUrlV3 = 'https://restcountries.com/v3.1';
  private baseUrlV2 = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams()
    .set('fields','name,capital,population,flags,alpha2Code,timezones,ccn3,cca2');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.baseUrlV3}/name/${termino}`;
    return this.http.get<Country[]>(url, {
      params:this.httpParams
    });
  }
  
  buscarCapital(capital:string):Observable<Country[]>{
    const url = `${this.baseUrlV3}/capital/${capital}`;
    return this.http.get<Country[]>(url, {
      params:this.httpParams
    });
  }

  getPaisPorAlpha(id:string):Observable<Country[]>{
    const url = `${this.baseUrlV3}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url = `${this.baseUrlV2}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {
      params:this.httpParams
    });
  }
}
