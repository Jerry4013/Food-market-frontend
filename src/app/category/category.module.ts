import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryComponent} from './category.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  exports: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule
  ]
})
export class CategoryModule { }
