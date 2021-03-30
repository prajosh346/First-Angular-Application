import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialAngularChartComponent } from './trial-angular-chart.component';

describe('TrialAngularChartComponent', () => {
  let component: TrialAngularChartComponent;
  let fixture: ComponentFixture<TrialAngularChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialAngularChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialAngularChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
