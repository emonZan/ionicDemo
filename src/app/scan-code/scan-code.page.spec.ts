import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IonicModule } from '@ionic/angular';

import { ScanCodePage } from './scan-code.page';

describe('ScanCodePage', () => {
  let component: ScanCodePage;
  let fixture: ComponentFixture<ScanCodePage>;
  const routerMock = {
    url: 'test',
    navigateByUrl: () => { }
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ScanCodePage],
      providers: [BarcodeScanner, { provide: Router, useValue: routerMock }],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
