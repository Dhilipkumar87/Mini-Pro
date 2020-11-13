import { TestBed } from '@angular/core/testing';

import { AddsongsService } from './addsongs.service';

describe('AddsongsService', () => {
  let service: AddsongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddsongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
