import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestartTestComponent } from './restart-test.component';

describe('RestartTestComponent', () => {
  let component: RestartTestComponent;
  let fixture: ComponentFixture<RestartTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestartTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
