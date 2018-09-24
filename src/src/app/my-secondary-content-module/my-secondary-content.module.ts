import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySecondaryContent } from './my-secondary-content/my-secondary-content.component';
import { MySecondaryContentRoutingModule } from './my-secondary-content-routing.module';
@NgModule({
  imports: [
    CommonModule,
    MySecondaryContentRoutingModule
  ],
  declarations: [MySecondaryContent],
  exports: [MySecondaryContent]
})
export class MySecondaryContentModule { }