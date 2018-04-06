import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {FuelComponent} from './fuel/fuel.component';
import {FleetComponent} from './fleet/fleet.component';
import {MarketingComponent} from './marketing/marketing.component';
import {FlightComponent} from './flight/flight.component';
import {StaffComponent} from './staff/staff.component';
import {FlightDetailComponent} from './flight/detail/flight.detail.component';

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'fuel', component: FuelComponent},
    {path: 'fleet', component: FleetComponent},
    {path: 'marketing', component: MarketingComponent},
    {path: 'flight', component: FlightComponent},
    {path: 'flight-detail/:id', component: FlightDetailComponent},
    {path: 'staff', component: StaffComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
