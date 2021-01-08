import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedVibesPageComponent } from './selected-vibes-page.component';

describe('SelectedVibesPageComponent', () => {
  let component: SelectedVibesPageComponent;
  let fixture: ComponentFixture<SelectedVibesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedVibesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedVibesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
