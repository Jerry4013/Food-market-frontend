import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  exports: [MaterialComponents],
  imports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
