import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ProyectoArticles} from '../../../../data/entities/proyectoArticles';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  // salidas
  @Output() create = new EventEmitter<ProyectoArticles>();
  @Output() edit = new EventEmitter<ProyectoArticles>();
  @Output() eliminar = new EventEmitter<ProyectoArticles>();
  // entradas
  @Input() proyectoArticulos: ProyectoArticles[] = [];
  @Input() proyectoArticulosAux: ProyectoArticles[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  _create() {
    this.create.emit(new ProyectoArticles());
  }

  _edit(item: ProyectoArticles) {
    this.edit.emit(item);
  }

  _eliminar(item: ProyectoArticles) {
    this.eliminar.emit(item);
  }

}
