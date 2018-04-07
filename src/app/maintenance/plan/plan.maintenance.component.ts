import {Component, OnInit} from '@angular/core';
import {MaintenanceService} from '../../shared/maintenance.service';
import {ManagerService} from '../../shared/manager.service';
import {Aircraft} from '../../shared/domain';

@Component({
    selector: 'app-plan-maintenance',
    templateUrl: './plan.maintenance.component.html',
    styleUrls: ['./plan.maintenance.component.css']
})
export class PlanMaintenanceComponent implements OnInit {

    aircrafts: Aircraft[];

    constructor(private maintenanceService: MaintenanceService, private managerService: ManagerService) {
    }

    ngOnInit() {
        this.aircrafts = this.managerService.getAircrafts();
    }
}
