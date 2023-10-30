import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArraysComponent } from './arrays/arrays.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ArraysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
