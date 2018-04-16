import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {FuelComponent} from './fuel/fuel.component';
import {FleetComponent} from './fleet/fleet.component';
import {MarketingComponent} from './marketing/marketing.component';
import {FlightComponent} from './flight/flight.component';
import {StaffComponent} from './staff/staff.component';
import {FlightDetailComponent} from './flight/detail/flight.detail.component';
import {ManagerService} from './shared/manager.service';
import {HelpComponent} from './help/help.component';
import {MaintenanceService} from './shared/maintenance.service';
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {PlanMaintenanceComponent} from './maintenance/plan/plan.maintenance.component';
import {PlanMaintenanceDetailsComponent} from './maintenance/plan/details/plan.maintenance.details.component';
import {MarketComponent} from './market/market.component';
import {AircraftDetailComponent} from './market/detail/aircraft.detail.component';
import {MarketService} from './shared/market.service';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        FuelComponent,
        FleetComponent,
        MarketingComponent,
        MarketComponent,
        AircraftDetailComponent,
        FlightComponent,
        FlightDetailComponent,
        MaintenanceComponent,
        PlanMaintenanceComponent,
        PlanMaintenanceDetailsComponent,
        StaffComponent,
        UserProfileComponent,
        HelpComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [
        ManagerService,
        MaintenanceService,
        MarketService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
