import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MissionStatementComponent} from './mission-statement/mission-statement.component';
import {AwarenessJourneyComponent} from './awareness-journey/awareness-journey.component';
import {ContactComponent} from './contact/contact.component';
import {PortalComponent} from './portal/portal.component';
import {DashboardModule} from './dashboard';
import {GeneralProfileComponent} from './general-profile/general-profile.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import {ComponentsModule} from '../components';


const modules = [
  HomeComponent,
  AboutComponent, 
  MissionStatementComponent,
  AwarenessJourneyComponent,
  ContactComponent,
  PortalComponent,
  GeneralProfileComponent,

  ];
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      ComponentsModule,
      GoogleMapsModule,
      CarouselModule,
      DashboardModule
      
    ],
    entryComponents: [],
    providers: [],
    declarations: modules,
    exports: modules
  })
  export class ContainersModule {}
  
  