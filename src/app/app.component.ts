import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CadastroUsuarioModalComponent } from './components/cadastro-usuario-modal/cadastro-usuario-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  constructor(public modalService : NgbModal) {}

  public instanciarModalCadastroUsuario() {
    new CadastroUsuarioModalComponent(this.modalService).abrirModal();
  }
}
