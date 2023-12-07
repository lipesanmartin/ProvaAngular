import { Component } from '@angular/core';
import { Cat } from 'src/models/Cat';
import { CatService } from 'src/services/cat.service';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.css']
})
export class ListCatsComponent {

  cats: Cat[] = [];

    constructor(
     public catService: CatService
    ) { }

  ngOnInit(): void {
    this.catService.getCats().subscribe(
      cats => {
        this.cats = cats;
        console.log('Cats:', cats);
      }
    );
  }
}
