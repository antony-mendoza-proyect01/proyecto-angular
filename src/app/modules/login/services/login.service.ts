import { Injectable } from '@angular/core';
import { Login } from 'src/app/data/structure/login';
import {ApiService} from '../../../data/services/api.service';
import {LOCAL} from '../../../core/conts/localStorage.const';
import {ToastService} from '../../../shared/services/toast.service';
import {INTERNAL } from '../../../core/conts/routes.conts';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apiService: ApiService,
    private toastService: ToastService,
    private router: Router,
  ) { }

  async onVerificarLogin(login: Login) {
    try {
      const result = this.apiService.authService.verificar(login);

      if(!result) {
        this.toastService.warning('Usuario o contraseña invalida');
        return;
      }

      localStorage.setItem(LOCAL.auth, JSON.stringify(result));

      this.router.navigate([INTERNAL.PADRE])

    }catch (e) {
    }
  }
}
