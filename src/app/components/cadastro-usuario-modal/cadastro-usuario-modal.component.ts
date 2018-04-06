import { NgModule, Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { StringUtils } from  './../../utils/StringUtils';
import { IUsuarioModel } from './../../interfaces/IUsuarioModel';

@Component({
    selector: 'cadastro-usuario-modal',
    templateUrl: './cadastro-usuario-modal.component.html'
})
export class ModalUsuarioTemplate {

    private http: HttpClient;
    private formularioInvalido: boolean = false;;
    private confirmarSenha: string;

    public usuario: IUsuarioModel = {
        id: 0,
        nome: "",
        senha: "",
        email: ""
    };

    constructor(private activeModal: NgbActiveModal, http: HttpClient) {
        this.http = http;
    }

    private validarFormularioCadastroUsuario() {
        if (StringUtils.isNullOrEmpty(this.usuario.nome)  ||
            StringUtils.isNullOrEmpty(this.usuario.senha) ||
            StringUtils.isNullOrEmpty(this.confirmarSenha) ||
            StringUtils.isNullOrEmpty(this.usuario.email)) {
                this.formularioInvalido = true;
                return false;
            }
        
        return true;
    }

    private cadastrarUsuario() {
        debugger;
        if (!this.validarFormularioCadastroUsuario())
            return;
    
        let headers = new HttpHeaders();
        let params = new HttpParams();
        headers.append('Content-Type', 'application/json');
        this.usuario.id = 1;
        params.set('Usuario', JSON.stringify(this.usuario));
        this.http.get('http://localhost:8080/api/usuarios/consultar', { 
            headers, params 
        }).map(ret => ret.toString())
        .subscribe(data => {
            console.log(data);
        });
    
    } 
}

@Component({
    selector: 'cadastro-usuario-modal',
    template: ``
})
export class CadastroUsuarioModalComponent {

    constructor(private modalService: NgbModal) {}

    public abrirModal() {
        this.modalService.open(ModalUsuarioTemplate);
    }
}