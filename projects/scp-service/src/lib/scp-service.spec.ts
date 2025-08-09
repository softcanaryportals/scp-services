import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScpService } from './scp-service';

describe('ScpService', () => {
  let component: ScpService;
  let fixture: ComponentFixture<ScpService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScpService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScpService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
