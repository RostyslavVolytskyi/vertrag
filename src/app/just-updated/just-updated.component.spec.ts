import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustUpdatedComponent } from './just-updated.component';

describe('JustUpdatedComponent', () => {
  let component: JustUpdatedComponent;
  let fixture: ComponentFixture<JustUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
