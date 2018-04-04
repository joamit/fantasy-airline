import {Component, OnInit} from '@angular/core';

interface Flight {
    from: string;
    to: string;
    aircraftName: string;
    arrivalTime: Date;
    progressAmount: number;
    flightNumber: string;
}

@Component({
    selector: 'app-flight',
    templateUrl: './flight.component.html',
    styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

    flights: Flight[] = [
        {from: 'EPVR', to: 'TDCK', aircraftName: 'SB C-768', arrivalTime: new Date(), progressAmount: 34, flightNumber: 'TY-98U'},
        {from: 'POIJ', to: 'EPVR', aircraftName: 'BC-89 IO', arrivalTime: new Date(), progressAmount: 78, flightNumber: 'BC-IUH'},
        {from: 'EPVR', to: 'ERTK', aircraftName: 'HJ U-I90', arrivalTime: new Date(), progressAmount: 90, flightNumber: 'TY-89D'},
        {from: 'INHJ', to: 'XCRT', aircraftName: 'UT F-098', arrivalTime: new Date(), progressAmount: 67, flightNumber: 'BJ-KJ8'}
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
