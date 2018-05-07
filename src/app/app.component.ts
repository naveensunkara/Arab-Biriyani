import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

@Component({
  template: `<ion-menu [content]="content" [swipeEnabled]="swipe" persistent="true">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" [attr.indicate]="p.class">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;
  swipe: boolean = true;
  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Menu', component: 'MenuPage', class: 'inactive' },
    { title: 'My Orders', component: 'WelcomePage', class: 'inactive' },
    { title: 'Payment History', component: 'TabsPage', class: 'inactive' },
    { title: 'My Account', component: 'CardsPage', class: 'inactive' },
    { title: 'Notification', component: 'ContentPage', class: 'inactive' },
    { title: 'Chat', component: 'LoginPage', class: 'inactive' },
    { title: 'Support', component: 'SignupPage', class: 'inactive' },
    { title: 'Log Out', component: 'ListMasterPage', class: 'inactive' },
    { title: 'Menu', component: 'TutorialPage', class: 'inactive' },
    { title: 'Settings', component: 'SettingsPage', class: 'inactive' },
    { title: 'Search', component: 'SearchPage', class: 'inactive' }
  ]

  constructor(platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.pages[5].class = 'active';
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#5c0070');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.pages.forEach((element, index) => {
      if(element === page){
        this.pages[index].class = 'active';
      }
      else{
        this.pages[index].class = 'inactive';
      }
    });
    this.nav.setRoot(page.component);
  }
}
