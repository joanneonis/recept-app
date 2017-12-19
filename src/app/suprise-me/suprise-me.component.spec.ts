import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupriseMeComponent } from './suprise-me.component';

describe('SupriseMeComponent', () => {
  let component: SupriseMeComponent;
  let fixture: ComponentFixture<SupriseMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupriseMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupriseMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
