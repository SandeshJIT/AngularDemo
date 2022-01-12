import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcompComponent } from './subcomp.component';

describe('SubcompComponent', () => {
  let component: SubcompComponent;
  let fixture: ComponentFixture<SubcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
