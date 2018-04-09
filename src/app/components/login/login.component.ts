import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { CadastroUsuarioModalComponent } from './../cadastro-usuario-modal/cadastro-usuario-modal.component'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  
  constructor(public modalService : NgbModal, private router: Router) {}

  ngOnInit() {
    this.router.navigate(['']);
  }
  
  public login() {
    this.router.navigate(['/home']);
  }

  public instanciarModalCadastroUsuario() {
    new CadastroUsuarioModalComponent(this.modalService).abrirModal();
  }
}
