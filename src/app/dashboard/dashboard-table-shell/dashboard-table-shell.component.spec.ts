import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTableShellComponent } from './dashboard-table-shell.component';

describe('DashboardTableShellComponent', () => {
  let component: DashboardTableShellComponent;
  let fixture: ComponentFixture<DashboardTableShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTableShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTableShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
