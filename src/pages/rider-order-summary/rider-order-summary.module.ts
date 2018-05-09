import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderOrderSummaryPage } from './rider-order-summary';

@NgModule({
    declarations: [
        RiderOrderSummaryPage
    ],
    imports: [
        IonicPageModule.forChild(RiderOrderSummaryPage)
    ],
    exports: [
        RiderOrderSummaryPage
    ]
})
export class RiderOrderSummaryModule { }   