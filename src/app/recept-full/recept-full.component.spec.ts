import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptFullComponent } from './recept-full.component';

describe('ReceptFullComponent', () => {
  let component: ReceptFullComponent;
  let fixture: ComponentFixture<ReceptFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
