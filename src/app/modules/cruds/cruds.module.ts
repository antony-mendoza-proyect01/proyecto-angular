import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudsComponent } from './cruds.component';
import {CrudsRoutingModule} from './cruds-routing.module';



@NgModule({
  declarations: [
    CrudsComponent
  ],
  imports: [
    CommonModule,
    CrudsRoutingModule
  ]
})
export class CrudsModule { }
