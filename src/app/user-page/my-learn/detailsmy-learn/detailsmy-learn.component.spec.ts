import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmyLearnComponent } from './detailsmy-learn.component';

describe('DetailsmyLearnComponent', () => {
  let component: DetailsmyLearnComponent;
  let fixture: ComponentFixture<DetailsmyLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsmyLearnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsmyLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
