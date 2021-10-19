import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeseComponent } from './mese.component';

describe('MeseComponent', () => {
  let component: MeseComponent;
  let fixture: ComponentFixture<MeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
