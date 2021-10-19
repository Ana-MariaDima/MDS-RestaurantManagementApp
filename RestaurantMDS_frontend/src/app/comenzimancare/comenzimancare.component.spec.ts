import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComenzimancareComponent } from './comenzimancare.component';

describe('ComenzimancareComponent', () => {
  let component: ComenzimancareComponent;
  let fixture: ComponentFixture<ComenzimancareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComenzimancareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComenzimancareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
