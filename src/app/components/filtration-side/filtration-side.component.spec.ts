import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrationSideComponent } from './filtration-side.component';

describe('FiltrationSideComponent', () => {
  let component: FiltrationSideComponent;
  let fixture: ComponentFixture<FiltrationSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrationSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrationSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
