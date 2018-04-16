import {Component, OnInit} from '@angular/core';
import {MarketService} from '../shared/market.service';
import {Aircraft} from '../shared/domain';

@Component({
    selector: 'app-market',
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

    aircrafts: Aircraft[];

    constructor(private marketService: MarketService) {
    }

    ngOnInit() {
        this.aircrafts = this.marketService.getAircrafts();
    }
}
