import {Injectable} from '@angular/core';
import {ScheduledMaintenance} from './domain';
import {ManagerService} from './manager.service';

const maintenanceList: ScheduledMaintenance[] = [];

@Injectable()
export class MaintenanceService {

    constructor(private managerService: ManagerService) {
    }

    getMaintenanceList(): ScheduledMaintenance[] {
        return maintenanceList;
    }

    planMaintenance(aircraftId: string,
                    activateACheck: boolean, activateBCheck: boolean, activateCCheck: boolean,
                    activateDCheck: boolean, checkStartsIn: number, checkDuration: number,
                    checkCost: number) {
        const aircraft = this.managerService.findAircraft(aircraftId);
        const now = new Date();
        const start = new Date(now.getTime() + (checkStartsIn * 3600000));
        const finish = new Date(start.getTime() + (checkDuration * 3600000));
        // TODO: if maintenance already exists, don't add it again
        maintenanceList.push({
            aircraft: aircraft,
            aircraftId: aircraftId,
            typeACheck: activateACheck,
            typeBCheck: activateBCheck,
            typeCCheck: activateCCheck,
            typeDCheck: activateDCheck,
            checkStartsIn: checkStartsIn,
            checkDuration: checkDuration,
            checkCost: checkCost,
            checkIssued: now,
            checkStarted: start,
            checkFinished: finish,
            completed: function (date: Date) {
                return date.getTime() <= new Date().getTime();
            }
        });
    }
}
