import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CompletePage } from './complete';
import { MenuPage } from '../menu/menu';

@NgModule({
    declarations: [
        CompletePage
    ],
    imports: [
      IonicPageModule.forChild(CompletePage)
    ],
    exports: [
        CompletePage
    ]
  })
  export class CompletePageModule { }