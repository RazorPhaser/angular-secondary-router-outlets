import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { MySecondaryContentModule } from "./my-secondary-content-module/my-secondary-content.module";
import { AppComponent } from './app.component';
import { ComponentlessModule } from './componentless/componentless.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MySecondaryContentModule,
    ComponentlessModule
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
