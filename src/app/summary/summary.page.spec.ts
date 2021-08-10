import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataService } from '../services/data.service';
import { UploadService } from '../services/upload.service';
import { SummaryPage } from './summary.page';

describe('SummaryPage', () => {
  let component: SummaryPage;
  let fixture: ComponentFixture<SummaryPage>;
  let uploadServiceSpy: jasmine.SpyObj<UploadService>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;
  beforeEach(waitForAsync(() => {
    uploadServiceSpy = jasmine.createSpyObj<UploadService>('UploadService', ['getImageUrl']);
    dataServiceSpy = jasmine.createSpyObj<DataService>('DataService', ['getData']);
    TestBed.configureTestingModule({
      declarations: [SummaryPage],
      providers: [
        HttpClient, HttpHandler,
        { provide: UploadService, useValue: uploadServiceSpy },
        { provide: DataService, useValue: dataServiceSpy }
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    dataServiceSpy.getData.and.returnValue({ domainName: 'mockDomain' });
    fixture = TestBed.createComponent(SummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
