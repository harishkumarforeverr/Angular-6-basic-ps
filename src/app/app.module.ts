import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressComponent } from './address/address.component';
import { InputpsComponent } from './inputps/inputps.component';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { RoutingpsModule } from './routingps/routingps.module';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { SetttingContactComponent } from './settting-contact/settting-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressComponent,
    InputpsComponent,
    HomeComponent,
    SettingComponent,
    PageNotFoundComponent,
    SettingProfileComponent,
    SetttingContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,
    HttpClientModule,
    RoutingpsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
