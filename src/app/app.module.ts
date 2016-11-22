import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AlphaListPage } from '../pages/alpha-list/alpha-list';
import { IonAlphaScrollModule } from 'ionic2-alpha-scroll';
import { DynamicComponentModule } from 'ng-dynamic';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AlphaListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonAlphaScrollModule,
    DynamicComponentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AlphaListPage
  ],
  providers: []
})
export class AppModule {}
