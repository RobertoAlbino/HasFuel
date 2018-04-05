import { NgModule, Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { StringUtils } from  './../../utils/StringUtils';
import { IUsuarioModel } from './../../interfaces/IUsuarioModel';

@Component({
    selector: 'cadastro-usuario-modal',
    templateUrl: './cadastro-usuario-modal.component.html'
})
export class ModalUsuarioTemplate {

    private erroValidacao: boolean = false;;
    private confirmarSenha: string;
    public usuario: IUsuarioModel = {
        id: 0,
        nome: "",
        senha: "",
        email: ""
    };

    constructor(public activeModal: NgbActiveModal) { }

    public validarUsuario() {
        if (StringUtils.isNullOrEmpty(this.usuario.nome)  ||
            StringUtils.isNullOrEmpty(this.usuario.senha) ||
            StringUtils.isNullOrEmpty(this.confirmarSenha) ||
            StringUtils.isNullOrEmpty(this.usuario.email)) {
                this.erroValidacao = true;
                return;
            }
        else {
            this.erroValidacao = false;
        }
    }
}

@Component({
    selector: 'cadastro-usuario-modal',
    template: ``
})
export class CadastroUsuarioModalComponent {

    constructor(private modalService: NgbModal) { }

    public abrirModal() {
        this.modalService.open(ModalUsuarioTemplate);
    }
}