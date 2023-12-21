import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandmentsofWestonComponent } from './commandmentsof-weston.component';

describe('CommandmentsofWestonComponent', () => {
  let component: CommandmentsofWestonComponent;
  let fixture: ComponentFixture<CommandmentsofWestonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandmentsofWestonComponent],
    });
    fixture = TestBed.createComponent(CommandmentsofWestonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
