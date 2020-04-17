import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './products.component';
import {MaterialModule} from '../material/material.module';



@NgModule({
    declarations: [
        ProductsComponent
    ],
    exports: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class ProductsModule { }
