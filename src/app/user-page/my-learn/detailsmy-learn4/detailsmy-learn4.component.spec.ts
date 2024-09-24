import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmyLearn4Component } from './detailsmy-learn4.component';

describe('DetailsmyLearn4Component', () => {
  let component: DetailsmyLearn4Component;
  let fixture: ComponentFixture<DetailsmyLearn4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsmyLearn4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsmyLearn4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
