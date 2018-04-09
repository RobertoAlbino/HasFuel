// Módulos
import { NgModule, Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Utilidades
import { StringUtils } from  './../../utils/StringUtils';

// Interfaces
import { IUsuarioModel } from './../../interfaces/Usuario/IUsuarioModel';
import { IUsuarioRetornoCadastroModel } from './../../interfaces/Usuario/IUsuarioRetornoCadastroModel';
import { IAlert } from './../../interfaces/IAlert';

// Enums
import { EAlertType } from './../../enums/EAlertType';

// Serviços
import { HttpService } from './../../services/httpService';
import { AlertService } from './../../services/alertService';

@Component({
    selector: 'cadastro-usuario-modal',
    templateUrl: './cadastro-usuario-modal.component.html'
})
export class ModalUsuarioTemplate {

    private confirmarSenha: string;
    private alerts: Array<IAlert> = [];
    private httpService: HttpService;
    private alertService: AlertService;

    public usuario: IUsuarioModel = {
        id: 0,
        login: "",
        senha: "",
        email: ""
    };

    constructor(private activeModal: NgbActiveModal, httpService: HttpService, alertService: AlertService) {
        this.httpService = httpService;
        this.alertService = alertService;
    }

    private destruirTodosAlerts() {
        this.alerts = [];
    }

    private criarAlert(tipo: EAlertType, strong: string, mensagem: string) {
        this.alerts.push(this.alertService.criarAlert(tipo, strong, mensagem));
    }

    private destruirAlert(alert: IAlert) {
        this.alerts.splice(this.alerts.indexOf(alert, 1));
    }

    private compararSenhasInformadas(primeiraSenha: string, segundaSenha: string) {
        if (primeiraSenha === segundaSenha)
            return true;    
    }

    private validarFormularioCadastroUsuarioInvalido() {
        if (StringUtils.isNullOrEmpty(this.usuario.login)  ||
            StringUtils.isNullOrEmpty(this.usuario.senha)  ||
            StringUtils.isNullOrEmpty(this.confirmarSenha) ||
            StringUtils.isNullOrEmpty(this.usuario.email)) {
                return true;
            }
    }

    private cadastrarUsuario() {
        if (this.validarFormularioCadastroUsuarioInvalido()) {
            this.criarAlert(EAlertType.Danger, "Atenção!", "Nem todos os campos foram preenchidos corretamente.");
            return;
        }
        if (!this.compararSenhasInformadas(this.usuario.senha, this.confirmarSenha)) {
            this.criarAlert(EAlertType.Danger, "Atenção!", "Senhas estão divergindo.");
            return;
        }  

        this.httpService.post("usuarios/criar", JSON.stringify(this.usuario), 
        (callback: IUsuarioRetornoCadastroModel, sucesso: boolean) => { 
            if (sucesso) {
                this.destruirTodosAlerts();
                this.criarAlert(EAlertType.Success, "Sucesso!", `Usuário ${ callback.login } cadastrado com sucesso.`);
            }                
            else {
                this.criarAlert(EAlertType.Danger, "Ops!",  `Não foi possível cadastrar o usuário, motivo: ${ callback.message }.`);
            }                
        })
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