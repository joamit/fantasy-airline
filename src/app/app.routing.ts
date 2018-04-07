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
import {HelpComponent} from './help/help.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {PlanMaintenanceComponent} from './maintenance/plan/plan.maintenance.component';
import {PlanMaintenanceDetailsComponent} from './maintenance/plan/details/plan.maintenance.details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'fuel', component: FuelComponent},
    {path: 'fleet', component: FleetComponent},
    {path: 'marketing', component: MarketingComponent},
    {path: 'flight', component: FlightComponent},
    {path: 'flight-detail/:id', component: FlightDetailComponent},
    {path: 'maintenance', component: MaintenanceComponent},
    {path: 'plan-maintenance', component: PlanMaintenanceComponent},
    {path: 'plan-maintenance-details/:id', component: PlanMaintenanceDetailsComponent},
    {path: 'staff', component: StaffComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'help', component: HelpComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
