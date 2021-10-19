import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MancaruriComponent } from './mancaruri.component';

describe('MancaruriComponent', () => {
  let component: MancaruriComponent;
  let fixture: ComponentFixture<MancaruriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MancaruriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MancaruriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
