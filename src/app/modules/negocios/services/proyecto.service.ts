import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/data/services/api.service';
import {ProyectoArticles} from '../../../data/entities/proyectoArticles';
import {firstValueFrom, lastValueFrom} from 'rxjs';
import { IProyecto} from '../../../data/interfaces/iProyecto';
import {ESTADO_LISTO} from '../../../core/conts/resultado.const';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../components/form-modal/form-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(
    private apiService: ApiService,
    private modalService: NgbModal
  ) { }

  async loadData(): Promise<ProyectoArticles[]>  {
    try {
      const iProyecto$ = await this.apiService.proyectoService.getAll();
      const iProyecto: IProyecto = await firstValueFrom(iProyecto$);

      if(iProyecto.status !== ESTADO_LISTO) {
        return [];
      }

      return iProyecto.articles;

    }catch (e) {
      return  [];
    }
  }

  async onCrear(proyectoArticulo: ProyectoArticles): Promise<ProyectoArticles> {
    try {
      const data = await this.openModalNegocios(proyectoArticulo);

      // mandamos a ejecutar servicio de crear
      // cosnt resultado: INegociosResponse = await this.apiService.negociosService.post(data);
      // si se guardado en base de datos
      // if(resultado.status !== ESTADO_OK) {
      //   mensaje de error, no se hace nada
      //   return null;
      // }

      return data;

    }catch (e) {
    }
  }

  async onEditar(proyectoArticulo: ProyectoArticles): Promise<ProyectoArticles> {
    try {
      const data = await this.openModalNegocios(proyectoArticulo);

      // mandamos a ejecutar servicio de editar
      // cosnt resultado: INegociosResponse = await this.apiService.negociosService.put(data);
      // si se guardado en base de datos
      // if(resultado.status !== ESTADO_OK) {
      //   mensaje de error, no se hace nada
      //   return null;
      // }

      return data;

    }catch (e) {
    }
  }

  async onEliminar(proyectoArticulo: ProyectoArticles): Promise<boolean> {
    try {

      // mandamos a ejecutar servicio de eliminar
      // cosnt resultado: INegociosResponse = await this.apiService.negociosService.delet(proyectoArticulo);
      // si se guardado en base de datos
      // if(resultado.status !== ESTADO_OK) {
      //   mensaje de error, no se hace nada
      //   return false;
      // }

      return true;

    }catch (e) {
    }
  }

  async openModalNegocios(proyectoArticulo: ProyectoArticles) {
    try {
      const modalRef = this.modalService.open(FormModalComponent,  { size: 'lg' });
      modalRef.componentInstance.proyectoArticulo = proyectoArticulo;

      return modalRef.result;
    }catch (e) {
    }
  }
}
