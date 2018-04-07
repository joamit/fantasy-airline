import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MaintenanceService} from '../../../shared/maintenance.service';
import {Aircraft} from '../../../shared/domain';
import {ManagerService} from '../../../shared/manager.service';

@Component({
    selector: 'app-plan-maintenance-details',
    templateUrl: './plan.maintenance.details.component.html',
    styleUrls: ['./plan.maintenance.details.component.css']
})
export class PlanMaintenanceDetailsComponent implements OnInit {

    aircraft: Aircraft;
    activateACheck: boolean;
    activateBCheck: boolean;
    activateCCheck: boolean;
    activateDCheck: boolean;
    checkStartsIn: number;
    checkDuration: number;
    checkCost: number;

    constructor(private activatedRoute: ActivatedRoute,
                private maintenanceService: MaintenanceService,
                private managerService: ManagerService,
                private router: Router) {
    }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.params['id'];
        this.aircraft = this.managerService.findAircraft(id);
        this.activateCheck();
    }

    private activateCheck() {
        this.checkStartsIn = 2;
        const flightHours = this.aircraft.maintenance.flightHours;
        if (flightHours >= this.aircraft.maintenance.A.hours && flightHours < this.aircraft.maintenance.B.hours) {
            this.activateACheck = true;
            this.checkDuration = this.aircraft.maintenance.A.duration;
            this.checkCost = this.aircraft.maintenance.A.cost;
        } else if (flightHours >= this.aircraft.maintenance.B.hours && flightHours < this.aircraft.maintenance.C.hours) {
            this.activateBCheck = true;
            this.checkDuration = this.aircraft.maintenance.B.duration;
            this.checkCost = this.aircraft.maintenance.B.cost;
        } else if (flightHours >= this.aircraft.maintenance.C.hours && flightHours < this.aircraft.maintenance.D.hours) {
            this.activateCCheck = true;
            this.checkDuration = this.aircraft.maintenance.C.duration;
            this.checkCost = this.aircraft.maintenance.C.cost;
        } else if (flightHours >= this.aircraft.maintenance.D.hours) {
            this.activateDCheck = true;
            this.checkDuration = this.aircraft.maintenance.D.duration;
            this.checkCost = this.aircraft.maintenance.D.cost;
        } else {
            // throw out notification since aircraft doesn't need any check
        }
    }

    planMaintenance() {
        this.maintenanceService.planMaintenance(this.aircraft.id,
            this.activateACheck, this.activateBCheck, this.activateCCheck, this.activateDCheck,
            this.checkStartsIn, this.checkDuration, this.checkCost);
        this.router.navigateByUrl('/maintenance');
    }
}
