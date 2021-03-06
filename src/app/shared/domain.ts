export interface Fleet {
    logo: string;
    aircraftDesignation: string;
    aircraftName: string;
    aircraftId: string;
    hoursToCheckA: number;
    hoursToCheckB: number;
    hoursToCheckC: number;
    hoursToCheckD: number;
    route: boolean;
}

export interface Flight {
    from: string;
    to: string;
    aircraftName: string;
    aircraftId: string;
    arrivalTime: Date;
    progressAmount: number;
    flightNumber: string;
}

export interface Aircraft {
    id: string;
    name: string;
    registrationNumber: string;
    imageUrl: string;
    cost: number;
    dimension: Dimension;
    route: Route;
    optional: Optional;
    speed: Speed;
    timeline: Timeline;
    maintenance: Maintenance;
}

export interface Maintenance {
    aircraftId: string;
    A: CheckDetail;
    B: CheckDetail;
    C: CheckDetail;
    D: CheckDetail;
    needsMaintenance: boolean;
    flightHours: number;
}

interface CheckDetail {
    hours: number;
    duration: number;
    cost: number;
}

interface Dimension {
    length: number;
    wingspan: number;
    runwayRequirement: number;
}

interface Route {
    origin: string;
    originCode: string;
    originCountry: string;
    destination: string;
    destinationCode: string;
    destinationCountry: string;
    type: string;
    duration: string;
    distance: number;
    demand: number;
}

interface Optional {
    registrationNumber: string;
    aircraftQuality: string;
    seatLayout: SeatLayout;
    aircraftValue: number;
    engine: string;
}

interface SeatLayout {
    B: number;
    F: number;
    E: number;
}

interface Speed {
    cruiseSpeed: number;
    operatingDistance: number;
    fuelConsumption: number;
    turnoverTime: number;
}

interface Timeline {
    delivered: Date;
    introduced: Date;
    totalFlightHours: number;
    flightHoursInCompany: number;
}

export interface DashboardStats {
    airlineName: string;
    companyReputation: number;
    fuelHolding: number;
    fuelCost: number;
    flights: number;
    passengersServed: number;
    fleetSize: number;
    activeRoutes: number;
    aircraftsPlannedForMaintenance: number;
    saleValue: number;
    aircraftsPendingDelivery: number;
    totalAssets: number;
    revenue: number;
    currentShareValue: number;
    currentlyInFlight: number;
    totalStaffCount: number;
    companyStockInfo: CompanyStockInfo;
    percentChange: number;
    amountChange: number;
}

interface CompanyStockInfo {
    labels: string[];
    series: number[][];
}

export interface HelpTopic {
    id: string;
    summary: string;
    description: string;
}

export interface ScheduledMaintenance {
    aircraft: Aircraft;
    aircraftId: string;
    typeACheck: boolean;
    typeBCheck: boolean;
    typeCCheck: boolean;
    typeDCheck: boolean;
    checkDuration: number;
    checkStartsIn: number;
    checkIssued: Date;
    checkStarted: Date;
    checkFinished: Date;
    checkCost: number;
    completed: any;
}
