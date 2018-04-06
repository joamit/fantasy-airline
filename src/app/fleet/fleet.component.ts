import {Component, OnInit} from '@angular/core';
import {ManagerService} from '../shared/manager.service';
import {Fleet} from '../shared/domain';

@Component({
    selector: 'app-fleet',
    templateUrl: './fleet.component.html',
    styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {

    fleet: Fleet[];

    constructor(private managerService: ManagerService) {
    }

    ngOnInit() {
        this.fleet = this.managerService.getFleetDetails();
    }

}
