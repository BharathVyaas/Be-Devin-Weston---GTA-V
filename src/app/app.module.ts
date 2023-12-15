import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadComponent } from './components/home/head/head.component';
import { BodyComponent } from './components/home/body/body.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { AboutDevinWestonComponent } from './pages/about-devin-weston/about-devin-weston.component';
import { MeetTheTeamComponent } from './pages/meet-the-team/meet-the-team.component';
import { CommandmentsofWestonComponent } from './pages/commandmentsof-weston/commandmentsof-weston.component';
import { HoldingsComponent } from './pages/holdings/holdings.component';
import { WestonAlphaFundComponent } from './pages/weston-alpha-fund/weston-alpha-fund.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeadComponent, BodyComponent, FooterComponent, AboutDevinWestonComponent, MeetTheTeamComponent, CommandmentsofWestonComponent, HoldingsComponent, WestonAlphaFundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
