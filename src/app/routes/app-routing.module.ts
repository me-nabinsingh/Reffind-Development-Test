import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';


const routes: Routes = [
  {path: '', redirectTo: '/categories', pathMatch: 'full' },
  {path: 'categories', component: CategoriesComponent},
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
