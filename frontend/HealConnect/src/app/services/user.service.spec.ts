import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    const httpClient = {} as HttpClient;
    service = new UserService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
