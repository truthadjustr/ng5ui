import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlistdynamicexampleComponent } from './gridlistdynamicexample.component';

describe('GridlistdynamicexampleComponent', () => {
  let component: GridlistdynamicexampleComponent;
  let fixture: ComponentFixture<GridlistdynamicexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridlistdynamicexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridlistdynamicexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
