import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    CuerpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
