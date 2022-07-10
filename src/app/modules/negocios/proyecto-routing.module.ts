import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProyectoComponent} from './proyecto.component';

const routesLogin: Routes = [
  {
    path: '',
    component: ProyectoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesLogin)],
  exports: [RouterModule]
})
export class NegociosRoutingModule { }
