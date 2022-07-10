import { Component, OnInit } from '@angular/core';
import { IProyecto } from 'src/app/data/interfaces/iProyecto';
import { ProyectoService} from './services/proyecto.service';
import { ProyectoArticles} from '../../data/entities/proyectoArticles';

@Component({
  selector: 'app-negocios',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: ProyectoArticles[] = [];
  constructor(
    private proyectoService: ProyectoService
  ) { }

  async ngOnInit() {
    await this.onLoadData();
  }

  async onLoadData() {
    this.proyecto = [];
    this.proyecto = await this.proyectoService.loadData();
    console.log(this.proyecto);
  }

  async onCrear(event: ProyectoArticles) {
    try {
      const result = await this.proyectoService.onCrear(event);

      if(result){
        this.proyecto.push(result);
        // await this.onLoadData();
      }

    }catch (e) {
    }
  }

  async onEditar(event: ProyectoArticles) {
    try {
      const result = await this.proyectoService.onEditar(event);

      if(result){
        this.proyecto.splice(this.proyecto.findIndex(e=> e.url === result.url), 1, result);
        // await this.onLoadData();
      }

    }catch (e) {
    }
  }

  async onEliminar(event: ProyectoArticles) {
    try {
      const result = await this.proyectoService.onEliminar(event);

      if(result){
        this.proyecto.splice(this.proyecto.findIndex(e=> e.url === event.url), 1);
        // await this.onLoadData();
      }

    }catch (e) {
    }
  }
}
