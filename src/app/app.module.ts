import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { CatService } from 'src/services/cat.service';
import { ListCatsComponent } from './list-cats/list-cats.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
