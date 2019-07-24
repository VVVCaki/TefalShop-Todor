import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TefalshopPocetnaComponent } from './tefalshop-pocetna.component';

describe('TefalshopPocetnaComponent', () => {
  let component: TefalshopPocetnaComponent;
  let fixture: ComponentFixture<TefalshopPocetnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TefalshopPocetnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TefalshopPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
