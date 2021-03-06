import {Component, OnInit} from '@angular/core';
import * as Chartist from 'chartist';
import {ManagerService} from '../shared/manager.service';
import {DashboardStats} from '../shared/domain';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    dashboardStats: DashboardStats;

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
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        this.dashboardStats = this.managerService.getDashboardStats();
        const companyStockChartData = this.dashboardStats.companyStockInfo;

        const companyStockChartOptions: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: {top: 0, right: 0, bottom: 0, left: 0},
        };

        const dailySalesChart = new Chartist.Line('#dailySalesChart', companyStockChartData, companyStockChartOptions);

        this.startAnimationForLineChart(dailySalesChart);
    }

}
