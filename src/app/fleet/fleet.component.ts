import {Component, OnInit} from '@angular/core';

interface Fleet {
    logo: string;
    aircraftDesignation: string;
    aircraftName: string;
    hoursToCheckA: number;
    hoursToCheckB: number;
    hoursToCheckC: number;
    hoursToCheckD: number;
    route: boolean;
}

@Component({
    selector: 'app-fleet',
    templateUrl: './fleet.component.html',
    styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {

    fleet: Fleet[] = [
        {
            logo: './assets/img/logo/saab-logo.png',
            aircraftDesignation: 'JB-TY8',
            aircraftName: 'SAAB 340',
            hoursToCheckA: 12,
            hoursToCheckB: 143,
            hoursToCheckC: 456,
            hoursToCheckD: 987,
            route: true
        }, {
            logo: './assets/img/logo/airbus-logo.png',
            aircraftDesignation: 'AB-34Y',
            aircraftName: 'Airbus A380',
            hoursToCheckA: 39,
            hoursToCheckB: 345,
            hoursToCheckC: 678,
            hoursToCheckD: 1256,
            route: false
        }, {
            logo: './assets/img/logo/boeing-logo.png',
            aircraftDesignation: 'BE-T8W',
            aircraftName: 'Boeing 777',
            hoursToCheckA: 195,
            hoursToCheckB: 423,
            hoursToCheckC: 798,
            hoursToCheckD: 1765,
            route: true
        }, {
            logo: './assets/img/logo/boeing-logo.png',
            aircraftDesignation: 'BE-E34',
            aircraftName: 'Boeing 737',
            hoursToCheckA: 23,
            hoursToCheckB: 165,
            hoursToCheckC: 476,
            hoursToCheckD: 989,
            route: true
        }
    ];

    constructor() {
    }

    ngOnInit() {

    }

}
