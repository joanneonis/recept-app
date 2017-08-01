import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptListComponent } from './recept-list.component';

describe('ReceptListComponent', () => {
  let component: ReceptListComponent;
  let fixture: ComponentFixture<ReceptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
