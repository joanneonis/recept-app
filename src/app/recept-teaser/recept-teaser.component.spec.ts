import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptTeaserComponent } from './recept-teaser.component';

describe('ReceptTeaserComponent', () => {
  let component: ReceptTeaserComponent;
  let fixture: ComponentFixture<ReceptTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
