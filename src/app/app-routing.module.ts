import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WestonAlphaFundComponent } from './pages/weston-alpha-fund/weston-alpha-fund.component';
import { MeetTheTeamComponent } from './pages/meet-the-team/meet-the-team.component';
import { CommandmentsofWestonComponent } from './pages/commandmentsof-weston/commandmentsof-weston.component';
import { HoldingsComponent } from './pages/holdings/holdings.component';
import { AboutDevinWestonComponent } from './pages/about-devin-weston/about-devin-weston.component';

const routes: Routes = [
  { path: 'MeetTheTeam', component: MeetTheTeamComponent },
  { path: 'CommandmentsofWeston', component: CommandmentsofWestonComponent },
  { path: 'Holdings', component: HoldingsComponent },
  { path: 'WestonAlphaFund', component: WestonAlphaFundComponent },
  { path: '', component: AboutDevinWestonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
