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
    {path: 'fuel', title: 'Fuel Status', icon: 'opacity', class: ''},
    {path: 'fleet', title: 'Fleet Details', icon: 'airplanemode_active', class: ''},
    {path: 'marketing', title: 'Marketing', icon: 'store_mall_directory', class: ''},
    {path: 'flight', title: 'Flight Details', icon: 'flight_takeoff', class: ''},
    {path: 'staff', title: 'Staff', icon: 'account_box', class: ''},
    {path: 'user-profile', title: 'User Profile', icon: 'person', class: ''}
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
