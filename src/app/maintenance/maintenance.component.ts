import {Component, OnInit} from '@angular/core';
import {MaintenanceService} from '../shared/maintenance.service';
import {ScheduledMaintenance} from '../shared/domain';

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

    maintenanceList: ScheduledMaintenance[];

    constructor(private maintenanceService: MaintenanceService) {
    }

    ngOnInit() {
        this.maintenanceList = this.maintenanceService.getMaintenanceList();
    }
}
