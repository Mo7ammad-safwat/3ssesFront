import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmyLearn2Component } from './detailsmy-learn2.component';

describe('DetailsmyLearn2Component', () => {
  let component: DetailsmyLearn2Component;
  let fixture: ComponentFixture<DetailsmyLearn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsmyLearn2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsmyLearn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
