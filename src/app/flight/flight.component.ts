import {Component, OnInit} from '@angular/core';
import {Flight} from '../shared/domain';
import {ManagerService} from '../shared/manager.service';


@Component({
    selector: 'app-flight',
    templateUrl: './flight.component.html',
    styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

    flights: Flight[];

    constructor(private managerService: ManagerService) {
    }

    ngOnInit() {
        this.flights = this.managerService.getFlightDetails();
    }
}
