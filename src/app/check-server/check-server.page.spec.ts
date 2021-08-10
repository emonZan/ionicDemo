import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UploadService } from '../services/upload.service';

import { CheckServerPage } from './check-server.page';

describe('CheckServerPage', () => {
  let component: CheckServerPage;
  let fixture: ComponentFixture<CheckServerPage>;
  let uploadServiceSpy: jasmine.SpyObj<UploadService>;
  const routerMock = {
    url: 'test',
    navigateByUrl: () => { }
  };
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CheckServerPage],
      providers: [
        HttpClient, HttpHandler,
        { provide: UploadService, useValue: uploadServiceSpy },
        { provide: Router, useValue: routerMock }
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckServerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
