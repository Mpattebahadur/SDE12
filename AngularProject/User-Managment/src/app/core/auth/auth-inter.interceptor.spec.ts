import { TestBed } from '@angular/core/testing';

import { AuthInterInterceptor } from './auth-inter.interceptor';

describe('AuthInterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthInterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterInterceptor = TestBed.inject(AuthInterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
