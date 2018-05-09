import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VesselsPage } from './vessels';

@NgModule({
    declarations: [
        VesselsPage
    ],
    imports: [
        IonicPageModule.forChild(VesselsPage)
    ],
    exports: [
        VesselsPage
    ]
})
export class VesselsModule { }  