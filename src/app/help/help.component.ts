import {Component, OnInit} from '@angular/core';
import {ManagerService} from '../shared/manager.service';
import {HelpTopic} from '../shared/domain';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

    helpTopics: HelpTopic[];

    constructor(private managerService: ManagerService) {
    }

    ngOnInit() {
        this.helpTopics = this.managerService.getHelpTopics();
    }
}
