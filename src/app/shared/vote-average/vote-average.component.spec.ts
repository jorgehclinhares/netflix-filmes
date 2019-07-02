import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteAverageComponent } from './vote-average.component';

describe('VoteAverageComponent', () => {
  let component: VoteAverageComponent;
  let fixture: ComponentFixture<VoteAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
