import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCatsComponentComponent } from './lista-cats-component/lista-cats-component.component';
import { HttpClientModule } from '@angular/common/http'
import { CatServiceService } from 'src/services/cat-service.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListaCatsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [CatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
