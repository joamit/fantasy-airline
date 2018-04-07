import {Component, OnInit} from '@angular/core';

interface Campaign {
    campaignName: string;
    campaignType: string;
    campaignEfficiency: number;
    campaignReach: string;
    campaignAmount: number;
    endTime: Date;
}

@Component({
    selector: 'app-marketing',
    templateUrl: './marketing.component.html',
    styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

    campaigns: Campaign[] = [
        {
            campaignName: 'Airline Publicity Campaign',
            campaignType: 'Publicity Campaign',
            campaignEfficiency: 100,
            campaignReach: 'International',
            campaignAmount: 100000,
            endTime: new Date()
        },
        {
            campaignName: 'Route Publicity Campaign',
            campaignType: 'Route Awareness Campaign',
            campaignEfficiency: 80,
            campaignReach: 'National',
            campaignAmount: 28765,
            endTime: new Date()
        },
        {
            campaignName: 'Aircraft Publicity Campaign',
            campaignType: 'Publicity Campaign',
            campaignEfficiency: 91,
            campaignReach: 'International',
            campaignAmount: 165798,
            endTime: new Date()
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    addNewCampaign() {
    }
}
