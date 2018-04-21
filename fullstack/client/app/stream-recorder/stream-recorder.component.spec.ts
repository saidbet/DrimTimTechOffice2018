import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamRecorderComponent } from './stream-recorder.component';

describe('StreamRecorderComponent', () => {
  let component: StreamRecorderComponent;
  let fixture: ComponentFixture<StreamRecorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamRecorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
