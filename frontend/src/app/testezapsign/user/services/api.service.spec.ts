import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApiService } from './api.service';

fdescribe('ApiService', () => {
  let service: ApiService;
  let http: HttpClient;

  // const httpStub = {
  //   get: () => of([
  //     {
  //       "id_user": 20,
  //       "email": "fernanda@pereira.com",
  //       "email_verified": false,
  //       "password": "aaaaa",
  //       "last_password_redefinition_at": "2022-05-09T14:39:55.721040Z",
  //       "created_at": "2022-05-09T14:39:55.721188Z",
  //       "last_updated_at": "2022-05-09T14:39:55.721283Z"
  //     }
  //   ])
  // }

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [{
      //     provide: HttpClient,
      //     useValue: httpStub,
      //   }]
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
    service.getAllUsers();
    expect(spy).toHaveBeenCalled();
  })
});
