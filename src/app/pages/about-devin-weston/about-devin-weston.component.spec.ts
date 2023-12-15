import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDevinWestonComponent } from './about-devin-weston.component';

describe('AboutDevinWestonComponent', () => {
  let component: AboutDevinWestonComponent;
  let fixture: ComponentFixture<AboutDevinWestonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutDevinWestonComponent]
    });
    fixture = TestBed.createComponent(AboutDevinWestonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
