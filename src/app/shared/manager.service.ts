import {Injectable} from '@angular/core';
import {Aircraft, DashboardStats, Fleet, Flight, HelpTopic} from './domain';

const aircrafts: Aircraft[] = [
    {
        id: 'BBSDR1235SD',
        name: 'SAAB 340',
        registrationNumber: 'JB-TY8',
        imageUrl: '../../../assets/img/aircrafts/antonov-an26.png',
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
        }
    }
];
const fleet: Fleet[] = [
    {
        logo: './assets/img/logo/saab-logo.png',
        aircraftDesignation: 'JB-TY8',
        aircraftName: 'SAAB 340',
        aircraftId: 'BBSDR1235SD',
        hoursToCheckA: 12,
        hoursToCheckB: 143,
        hoursToCheckC: 456,
        hoursToCheckD: 987,
        route: true
    }, {
        logo: './assets/img/logo/airbus-logo.png',
        aircraftDesignation: 'AB-34Y',
        aircraftName: 'Airbus A380',
        aircraftId: 'BBSDR1235SD',
        hoursToCheckA: 39,
        hoursToCheckB: 345,
        hoursToCheckC: 678,
        hoursToCheckD: 1256,
        route: false
    },
    {
        logo: './assets/img/logo/boeing-logo.png',
        aircraftDesignation: 'BE-T8W',
        aircraftName: 'Boeing 777',
        aircraftId: 'BBSDR1235SD',
        hoursToCheckA: 195,
        hoursToCheckB: 423,
        hoursToCheckC: 798,
        hoursToCheckD: 1765,
        route: true
    },
    {
        logo: './assets/img/logo/boeing-logo.png',
        aircraftDesignation: 'BE-E34',
        aircraftName: 'Boeing 737',
        aircraftId: 'BBSDR1235SD',
        hoursToCheckA: 23,
        hoursToCheckB: 165,
        hoursToCheckC: 476,
        hoursToCheckD: 989,
        route: true
    }
];
const flights: Flight[] = [
    {
        from: 'EPVR',
        to: 'TDCK',
        aircraftName: 'SB C-768',
        aircraftId: 'BBSDR1235SD',
        arrivalTime: new Date(),
        progressAmount: 34,
        flightNumber: 'TY-98U'
    },
    {
        from: 'POIJ',
        to: 'EPVR',
        aircraftName: 'BC-89 IO',
        aircraftId: 'BBSDR1235SD',
        arrivalTime: new Date(),
        progressAmount: 78,
        flightNumber: 'BC-IUH'
    },
    {
        from: 'EPVR',
        to: 'ERTK',
        aircraftName: 'HJ U-I90',
        aircraftId: 'BBSDR1235SD',
        arrivalTime: new Date(),
        progressAmount: 90,
        flightNumber: 'TY-89D'
    },
    {
        from: 'INHJ',
        to: 'XCRT',
        aircraftName: 'UT F-098',
        aircraftId: 'BBSDR1235SD',
        arrivalTime: new Date(),
        progressAmount: 67,
        flightNumber: 'BJ-KJ8'
    }
];
const dashboardStats: DashboardStats = {
    airlineName: 'Trans Airways',
    companyReputation: 100,
    fuelHolding: 145298,
    fuelCost: 156,
    flights: 15,
    activeRoutes: 15,
    aircraftsPendingDelivery: 1,
    aircraftsPlannedForMaintenance: 3,
    fleetSize: 15,
    passengersServed: 54367,
    saleValue: 77,
    currentlyInFlight: 12,
    currentShareValue: 2.56,
    revenue: 54321,
    totalAssets: 7865564,
    totalStaffCount: 45,
    companyStockInfo: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
            [12, 17, 7, 17, 23, 18, 38]
        ]
    },
    percentChange: -1.25,
    amountChange: -0.08
};

// noinspection TsLint
const helpTopics: HelpTopic[] = [
    {
        id: '#ABHSDFSLDCI',
        summary: 'Used Vs New Aircraft',
        description: 'Used aircrafts are generally cheaper, but also older thus having a larger fuel consumption and a lower lifespan. ' +
        'New aircrafts can be configured according to the airline requirements, have better fuel economy but are expensive. ' +
        'When buying a used aircraft, it can be a good idea to check when it is due for a maintenance. ' +
        'Some aircrafts are due for maintenance within a few hours of buying and can become quite expensive in long run.'
    },
    {
        id: '#ALHLIDFSFDH',
        summary: 'Test summary',
        description: 'Test Description for the test summary to see if the collapse works!!'
    }
];


@Injectable()
export class ManagerService {
    getFleetDetails(): Fleet[] {
        return fleet;
    }

    getFlightDetails(): Flight[] {
        return flights;
    }

    getDashboardStats(): DashboardStats {
        return dashboardStats;
    }

    findAircraft(id: string): Aircraft {
        return aircrafts.find(aircraft => aircraft.id === id);
    }

    getHelpTopics(): HelpTopic[] {
        return helpTopics;
    }
}

