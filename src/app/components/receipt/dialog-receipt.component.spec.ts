import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReceiptComponent } from './dialog-receipt.component';

describe('ReceiptComponent', () => {
  let component: DialogReceiptComponent;
  let fixture: ComponentFixture<DialogReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
