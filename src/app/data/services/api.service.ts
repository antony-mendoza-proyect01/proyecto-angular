import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {LocalizacionesService} from './localizaciones.service';
import {ProyectoService} from './proyecto.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public authService: AuthService,
    public localizacionesService: LocalizacionesService,
    public proyectoService: ProyectoService,
  ) { }
}
