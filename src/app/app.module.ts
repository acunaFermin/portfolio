import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [AppComponent, BarraLateralComponent, CuerpoComponent, PortfolioComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
