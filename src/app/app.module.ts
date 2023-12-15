import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadComponent } from './components/home/head/head.component';
import { BodyComponent } from './components/home/body/body.component';
import { FooterComponent } from './components/home/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeadComponent, BodyComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
