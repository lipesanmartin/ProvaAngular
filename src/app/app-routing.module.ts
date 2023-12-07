import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListCatsComponent } from './list-cats/list-cats.component';

const routes: Routes = [
  { path: '', redirectTo: '/cats', pathMatch: 'full' },
  { path: 'cats', component: ListCatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
