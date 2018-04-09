import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

// Utilidades
import { StringUtils } from  './../../utils/StringUtils';

// Interfaces
import { IUsuarioModel } from './../../interfaces/usuario/IUsuarioModel';
import { IUsuarioCriarRetornoModel } from './../../interfaces/usuario/IUsuarioCriarRetornoModel';
import { IAlert } from './../../interfaces/IAlert';

// Enums
import { EAlertType } from './../../enums/EAlertType';

// Serviços
import { HttpService } from './../../services/httpService';
import { AlertService } from './../../services/alertService';

// Componentes
import { CadastroUsuarioModalComponent } from './../cadastro-usuario-modal/cadastro-usuario-modal.component'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  
  private httpService: HttpService;
  private alertService: AlertService;
  public usuario: IUsuarioModel;
  public confirmarSenha: string;
  public alerts: Array<IAlert> = [];

  constructor(public modalService : NgbModal, private router: Router, httpService: HttpService, alertService: AlertService) {
    this.httpService = httpService;
    this.alertService = alertService;
  }

  ngOnInit() {
    this.router.navigate(['']);
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
  
  public login() {
    
  }

  public instanciarModalCadastroUsuario() {
    new CadastroUsuarioModalComponent(this.modalService).abrirModal();
  }
}
