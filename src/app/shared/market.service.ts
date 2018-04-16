import {Aircraft} from './domain';
import {Injectable} from '@angular/core';

const aircrafts: Aircraft[] = [
    {
        id: 'BBSDR1235SD',
        name: 'SAAB 340',
        registrationNumber: 'JB-TY8',
        imageUrl: './assets/img/logo/boeing-logo.png',
        cost: 89234,
        dimension: {
            length: 18,
            wingspan: 18,
            runwayRequirement: 4500
        },
        optional: {
            registrationNumber: 'JB-TY8',
            aircraftQuality: '5/10',
            aircraftValue: 78908,
            engine: 'TANAKA TY-98U',
            seatLayout: {
                B: 10,
                F: 15,
                E: 125
            },
        },
        route: {
            demand: 98,
            destination: 'Berlin',
            destinationCode: 'GMBR',
            destinationCountry: 'Germany',
            origin: 'Warsaw',
            originCode: 'PLWR',
            originCountry: 'Poland',
            distance: 709,
            duration: '03:30:30',
            type: 'Direct'
        },
        speed: {
            cruiseSpeed: 123,
            fuelConsumption: 12,
            operatingDistance: 1500,
            turnoverTime: 2
        },
        timeline: {
            delivered: new Date(),
            introduced: new Date(),
            flightHoursInCompany: 12,
            totalFlightHours: 345
        },
        maintenance: {
            aircraftId: 'BBSDR1235SD',
            A: {
                hours: 84,
                duration: 3,
                cost: 3498
            },
            B: {
                hours: 167,
                duration: 7,
                cost: 9498
            },
            C: {
                hours: 987,
                duration: 13,
                cost: 42768
            },
            D: {
                hours: 1756,
                duration: 39,
                cost: 98745
            },
            needsMaintenance: false,
            flightHours: 85
        }
    }
];

@Injectable()
export class MarketService {
    getAircrafts(): Aircraft[] {
        return aircrafts;
    }
}
