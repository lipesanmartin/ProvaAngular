import { Component } from '@angular/core';
import { Cat } from 'src/models/cat';
import { CatServiceService } from 'src/services/cat-service.service';

@Component({
  selector: 'app-lista-cats-component',
  templateUrl: './lista-cats-component.component.html',
  styleUrls: ['./lista-cats-component.component.css']
})

export class ListaCatsComponentComponent {
  cats: Cat[]



  constructor(public catService: CatServiceService) {
    this.catService.getCats().subscribe((data) =>
    this.cats = data);
    console.log(this.cats)

  }



}

