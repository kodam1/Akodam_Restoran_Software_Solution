import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarServiceComponent } from './navbar-service.component';

describe('NavbarServiceComponent', () => {
  let component: NavbarServiceComponent;
  let fixture: ComponentFixture<NavbarServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
