import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChelneriComponent } from './chelneri.component';

describe('ChelneriComponent', () => {
  let component: ChelneriComponent;
  let fixture: ComponentFixture<ChelneriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChelneriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChelneriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
