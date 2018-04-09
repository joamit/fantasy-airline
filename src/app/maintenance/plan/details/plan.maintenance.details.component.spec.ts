import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PlanMaintenanceDetailsComponent} from './plan.maintenance.details.component';


describe('PlanMaintenanceDetailsComponent', () => {
    let component: PlanMaintenanceDetailsComponent
    let fixture: ComponentFixture<PlanMaintenanceDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlanMaintenanceDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlanMaintenanceDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
