import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiCustomer} from '../class/api-customer';
import {environment} from '../../../environments/environment';
import {Login} from '../structure/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.autenticacionApi;
    this.controller = 'auth/';

  }

  verificar(login: Login): boolean {
    this.action = `verificar`;
    // return this.http.post<any>(`${this.prefix}${this.controller}${this.action}`, {
    //   name: login.userName.toUpperCase(),
    //   pass: login.password,
    // }).pipe(map(response => response));
    return !!LOGEAR.find(e => e.userName === login.userName && e.password === login.password);
  }
}

// tabla de login
export const LOGEAR: Login[] = [
  {
    userName: 'francisco',
    password: '123'
  },
  {
    userName: 'antony',
    password: '12345'
  }
];
