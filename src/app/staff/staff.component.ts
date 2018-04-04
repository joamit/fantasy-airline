import {Component, OnInit} from '@angular/core';

interface Staff {
    staffType: string;
    required: number;
    employed: number;
    logoUrl: string;
    morale: number;
    salary: number;
    cardBackgroundColor: string;
}

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

    staffDetails: Staff[] = [
        {staffType: 'Pilots', employed: 32, required: 30, morale: 97, salary: 200, logoUrl: 'face', cardBackgroundColor: 'green'},
        {staffType: 'Technicians', employed: 7, required: 5, morale: 99, salary: 400, logoUrl: 'face', cardBackgroundColor: 'orange'},
        {staffType: 'Ground Crew', employed: 9, required: 7, morale: 94, salary: 350, logoUrl: 'face', cardBackgroundColor: 'skyBlue'},
        {staffType: 'Check-In Crew', employed: 4, required: 2, morale: 99, salary: 320, logoUrl: 'face', cardBackgroundColor: 'magenta'},
        {staffType: 'Cleaning Crew', employed: 3, required: 2, morale: 97, salary: 450, logoUrl: 'face', cardBackgroundColor: 'yellow'},
        {staffType: 'Flight Crew', employed: 6, required: 4, morale: 98, salary: 330, logoUrl: 'face', cardBackgroundColor: 'grey'}
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
