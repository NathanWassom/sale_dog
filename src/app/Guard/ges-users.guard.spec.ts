import { TestBed } from '@angular/core/testing';

import { GesUsersGuard } from './ges-users.guard';

describe('GesUsersGuard', () => {
  let guard: GesUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GesUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
