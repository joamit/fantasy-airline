import {Component, OnInit} from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: 'dashboard', title: 'Overview', icon: 'dashboard', class: ''},
    {path: 'fuel', title: 'Fuel', icon: 'opacity', class: ''},
    {path: 'market', title: 'Market', icon: 'add_shopping_cart', class: ''},
    {path: 'fleet', title: 'Fleet', icon: 'airplanemode_active', class: ''},
    {path: 'flight', title: 'Flights', icon: 'flight_takeoff', class: ''},
    {path: 'maintenance', title: 'Maintenance', icon: 'build', class: ''},
    {path: 'marketing', title: 'Marketing', icon: 'store_mall_directory', class: ''},
    {path: 'staff', title: 'Staff', icon: 'account_box', class: ''},
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        return $(window).width() <= 991;
    };
}
