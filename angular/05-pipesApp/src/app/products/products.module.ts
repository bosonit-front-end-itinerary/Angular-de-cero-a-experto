import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

import { ToggleCasePipe } from './pipes/toggle-case.pipe';




@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    //pipes
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
