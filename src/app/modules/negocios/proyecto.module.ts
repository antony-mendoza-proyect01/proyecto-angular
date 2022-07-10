import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ProyectoComponent } from './proyecto.component';
import {NegociosRoutingModule} from './proyecto-routing.module';
import { ListadoComponent } from './components/listado/listado.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    ProyectoComponent,
    ListadoComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    NegociosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProyectoModule { }
