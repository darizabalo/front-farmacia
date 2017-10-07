import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { UserDashboardComponent }   from './user-dashboard.component';
import { UserAdminComponent }   from './user-admin.component';
import { UserDetailComponent }   from './user-detail.component';
import { ProdReservationComponent }   from './prod-reservation.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserAdminComponent,
    UserDetailComponent,
    ProdReservationComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
