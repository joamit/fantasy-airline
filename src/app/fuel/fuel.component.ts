import {Component, OnInit} from '@angular/core';
import * as Chartist from 'chartist';
import {ManagerService} from '../shared/manager.service';

@Component({
    selector: 'app-fuel',
    templateUrl: './fuel.component.html',
    styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

    enablePurchase: boolean;
    currentFuelPrice: number;
    currentFuelPricePerThousandLbs: number;
    amountToBuy: number;
    amountToPay: number;

    constructor(private managerService: ManagerService) {
    }

    startAnimationForLineChart(chart) {
        let seq: any, delays: any, durations: any;
        seq = 0;
        delays = 80;
        durations = 500;

        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            } else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq = 0;
    };

    ngOnInit() {
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        const fuelPriceData = {
            labels: ['Mar 29', 'Mar 30', 'Mar 31', 'Apr 1', 'Apr 2', 'Apr 3', 'Apr 4'],
            series: [
                [542, 443, 320, 780, 553, 453, 326]

            ]
        };
        const fuelPriceChartOptions: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: {top: 0, right: 0, bottom: 0, left: 0},
            showArea: true
        };

        const fuelPriceChart = new Chartist.Line('#fuelPriceChart', fuelPriceData, fuelPriceChartOptions);

        // start animation for the Emails Subscription Chart
        this.startAnimationForLineChart(fuelPriceChart);

        this.currentFuelPrice = this.managerService.getCurrentFuelPrice();
        this.amountToBuy = 1000;
        this.currentFuelPricePerThousandLbs = this.currentFuelPrice * 1000;
        this.amountToPay = this.currentFuelPrice * this.amountToBuy;
    }

    togglePurchase() {
        this.enablePurchase = !this.enablePurchase;
    }

    purchase() {
    }

    recalculatePrice() {
        this.amountToPay = this.amountToBuy * this.currentFuelPrice;
    }
}
