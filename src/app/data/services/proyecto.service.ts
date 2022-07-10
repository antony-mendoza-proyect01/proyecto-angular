import { Injectable } from '@angular/core';
import {ApiCustomer} from '../class/api-customer';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { IProyecto} from '../interfaces/iProyecto';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService  extends ApiCustomer {


  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.autenticacionApi;
    this.controller = 'auth/';
  }

  getAll(): Observable<IProyecto>  {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dc99d8db16b64950b4f151cb52bfa1de';
    return this.http.get<IProyecto>(`${url}`).pipe(map(response => response));
  }


}
