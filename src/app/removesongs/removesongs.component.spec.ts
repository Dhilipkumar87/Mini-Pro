import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovesongsComponent } from './removesongs.component';

describe('RemovesongsComponent', () => {
  let component: RemovesongsComponent;
  let fixture: ComponentFixture<RemovesongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovesongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovesongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
