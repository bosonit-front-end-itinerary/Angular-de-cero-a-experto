import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';

//import { MenuModule } from 'primeng/menu';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule
    //MenuModule
  ]
})
export class PrimeNgModule { }
