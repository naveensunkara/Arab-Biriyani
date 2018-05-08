import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TrackPage } from './track';
import { MenuPage } from '../menu/menu';

@NgModule({
    declarations: [
        TrackPage
    ],
    imports: [
      IonicPageModule.forChild(TrackPage)
    ],
    exports: [
        TrackPage
    ]
  })
  export class MenuPageModule { }