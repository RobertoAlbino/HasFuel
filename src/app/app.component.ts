import { Component } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario/cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario/cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  constructor(private modalService: NgbModal) {}
  
  open() {
    this.modalService.open(CadastroUsuarioComponent);
  }
}
