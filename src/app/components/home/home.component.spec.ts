import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Compilação do componente Home', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    }).compileComponents();  
  }))
});