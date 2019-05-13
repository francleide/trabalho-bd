import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasEntregasComponent } from './minhas-entregas.component';

describe('MinhasEntregasComponent', () => {
  let component: MinhasEntregasComponent;
  let fixture: ComponentFixture<MinhasEntregasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasEntregasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasEntregasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
