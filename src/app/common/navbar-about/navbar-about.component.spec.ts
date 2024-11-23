import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAboutComponent } from './navbar-about.component';

describe('NavbarAboutComponent', () => {
  let component: NavbarAboutComponent;
  let fixture: ComponentFixture<NavbarAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
