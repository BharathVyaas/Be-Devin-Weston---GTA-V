import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestonAlphaFundComponent } from './weston-alpha-fund.component';

describe('WestonAlphaFundComponent', () => {
  let component: WestonAlphaFundComponent;
  let fixture: ComponentFixture<WestonAlphaFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WestonAlphaFundComponent]
    });
    fixture = TestBed.createComponent(WestonAlphaFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
