import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KitchenOrdersPage } from './kitchen-orders';

@NgModule({
    declarations: [
        KitchenOrdersPage
    ],
    imports: [
        IonicPageModule.forChild(KitchenOrdersPage)
    ],
    exports: [
        KitchenOrdersPage
    ]
})
export class KitchenOrdersModule { }  