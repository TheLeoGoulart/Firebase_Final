import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GraficosComponent } from './app.component';
import { DadosService } from './dados.service';

@NgModule({
  declarations: [
    GraficosComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    GraficosComponent
  ],
  providers:[
    DadosService
  ],
  bootstrap: [GraficosComponent]
})
export class GraficosModule { }
