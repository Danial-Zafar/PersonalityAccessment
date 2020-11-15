import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {AboutComponent} from './containers/about/about.component';
import {MissionStatementComponent} from './containers/mission-statement/mission-statement.component';
import {AwarenessJourneyComponent} from './containers/awareness-journey/awareness-journey.component';
import {ContactComponent} from './containers/contact/contact.component';
import {PortalComponent} from './containers/portal/portal.component';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {GeneralProfileComponent} from './containers/general-profile/general-profile.component';

import { AuthGuardService } from './services/auth-guard.service';

import { routes as dashboardRoutes } from './dasboard-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'mission-statement',
    component: MissionStatementComponent
  },
  {
    path: 'awareness-journey',
    component: AwarenessJourneyComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portal',
    component: PortalComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: dashboardRoutes,
    canActivate: [AuthGuardService]
  },
  {
    path: 'general-profile',
    component: GeneralProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
