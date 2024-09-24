import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmyLearn3Component } from './detailsmy-learn3.component';

describe('DetailsmyLearn3Component', () => {
  let component: DetailsmyLearn3Component;
  let fixture: ComponentFixture<DetailsmyLearn3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsmyLearn3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsmyLearn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
