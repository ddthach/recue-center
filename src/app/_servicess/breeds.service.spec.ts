import { TestBed } from '@angular/core/testing';

import { ListOfBreedsService } from './breeds.service';

describe('ListOfBreedsService', () => {
  let service: ListOfBreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfBreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
