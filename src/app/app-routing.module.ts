import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCatsComponentComponent } from './lista-cats-component/lista-cats-component.component';

const routes: Routes = [
  {path: '', component: ListaCatsComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
