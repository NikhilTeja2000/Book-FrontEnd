import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatidPageComponent } from './catid-page.component';

describe('CatidPageComponent', () => {
  let component: CatidPageComponent;
  let fixture: ComponentFixture<CatidPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatidPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
