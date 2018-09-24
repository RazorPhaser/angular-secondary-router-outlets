import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentlessComponent } from './componentless/componentless.component';
import { ComponentlessRoutingModule } from './componentless-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentlessRoutingModule
  ],
  declarations: [ComponentlessComponent]
})
export class ComponentlessModule { }