import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ManagerService} from '../../shared/manager.service';
import {Aircraft} from '../../shared/domain';

@Component({
    selector: 'app-aircraft-detail',
    templateUrl: './aircraft.detail.component.html',
    styleUrls: ['./aircraft.detail.component.css']
})
export class AircraftDetailComponent implements OnInit {
    aircraft: Aircraft;

    constructor(private activatedRoute: ActivatedRoute, private managerService: ManagerService) {
    }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params['id'];
        this.aircraft = this.managerService.findAircraft(id);
    }

}
