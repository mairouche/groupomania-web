import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserinfoComponent } from './home-userinfo.component';

describe('HomeUserinfoComponent', () => {
  let component: HomeUserinfoComponent;
  let fixture: ComponentFixture<HomeUserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
