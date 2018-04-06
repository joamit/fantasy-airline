import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ManagerService} from '../../shared/manager.service';
import {Aircraft} from '../../shared/domain';

@Component({
    selector: 'app-flight-detail',
    templateUrl: './flight.detail.component.html',
    styleUrls: ['./flight.detail.component.css']
})
export class FlightDetailComponent implements OnInit {
    aircraft: Aircraft;

    constructor(private route: ActivatedRoute, private managerService: ManagerService) {
    }

    ngOnInit() {
        const aircraftId = this.route.snapshot.params['id'];
        this.aircraft = this.managerService.findAircraft(aircraftId);
    }
}
