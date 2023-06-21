import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';


//import { MenuModule } from 'primeng/menu';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    TableModule,
    ToolbarModule

    //MenuModule
  ]
})
export class PrimeNgModule { }
