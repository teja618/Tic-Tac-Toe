import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSquareComponent } from './app-square.component';

describe('AppSquareComponent', () => {
  let component: AppSquareComponent;
  let fixture: ComponentFixture<AppSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
