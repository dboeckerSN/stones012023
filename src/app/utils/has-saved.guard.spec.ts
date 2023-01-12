import { TestBed } from '@angular/core/testing';

import { HasSavedGuard } from './has-saved.guard';

describe('HasSavedGuard', () => {
  let guard: HasSavedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasSavedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
