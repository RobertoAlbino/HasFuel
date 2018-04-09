import { TestBed, async } from '@angular/core/testing';

import { ModalUsuarioTemplate } from './cadastro-usuario-modal.component';

describe('Compilação do componente CadastroUsuarioModal', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalUsuarioTemplate
      ],
    }).compileComponents();  
  }))
});