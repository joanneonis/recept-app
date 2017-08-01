import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReceptComponent } from './add-recept.component';

describe('AddReceptComponent', () => {
  let component: AddReceptComponent;
  let fixture: ComponentFixture<AddReceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
