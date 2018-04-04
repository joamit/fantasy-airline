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

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        FuelComponent,
        FleetComponent,
        MarketingComponent,
        FlightComponent,
        StaffComponent,
        UserProfileComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
