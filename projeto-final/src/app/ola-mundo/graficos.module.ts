import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DadosService } from './dados.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    AppComponent
  ],
  providers:[
    DadosService
  ],
  bootstrap: [AppComponent]
})
export class GraficosModule { }
