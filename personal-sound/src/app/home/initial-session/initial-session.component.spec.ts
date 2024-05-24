import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialSessionComponent } from './initial-session.component';

describe('InitialSessionComponent', () => {
  let component: InitialSessionComponent;
  let fixture: ComponentFixture<InitialSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
