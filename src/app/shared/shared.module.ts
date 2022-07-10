import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as formComponents from './components';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ...formComponents.COMPONENTS,  // declaracion de los componentes en una sola parte
    ],
  imports: [
    CommonModule,
    NgbModule

  ],
  exports: [// para exportar a los demas modulos
    ...formComponents.COMPONENTS,// declaracion de los componentes en una sola parte
    NgbModule
  ]
})
export class SharedModule { }
