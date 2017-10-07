import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardComponent }   from './user-dashboard.component';
import { UserAdminComponent }   from './user-admin.component';
import { UserDetailComponent }   from './user-detail.component';
import { ProdReservationComponent }   from './prod-reservation.component';

const routes: Routes = [
  { path: '', redirectTo: '/userDashboard', pathMatch: 'full' },
  { path: 'userDashboard',  component: UserDashboardComponent },
  { path: 'userAdmin', component: UserAdminComponent },
  { path: 'userDetail/:id', component: UserDetailComponent },
  { path: 'prodReservation',     component: ProdReservationComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/