import { NgModule, Component } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'cadastro-usuario-modal',
    templateUrl: './cadastro-usuario-modal.component.html'
})
export class ModalUsuarioTemplate {

    constructor(public activeModal: NgbActiveModal) { }

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