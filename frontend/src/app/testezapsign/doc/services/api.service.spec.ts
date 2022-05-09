import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

fdescribe('ApiService', () => {
  let service: ApiService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(ApiService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   
  it('should call GET with correct endpoint', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getAllDocs();
    expect(spy).toHaveBeenCalled();
  })
});
