import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { JokesComponent } from '../jokes/jokes.component';

const routes: Routes = [
  {path: '', redirectTo: '/categories', pathMatch: 'full' },
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:slug', component: JokesComponent},
]

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
