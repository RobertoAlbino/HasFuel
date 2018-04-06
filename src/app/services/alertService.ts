import { Injectable } from "@angular/core";

import { IAlert } from './../interfaces/IAlert';
import { EAlertType } from './../enums/EAlertType';

@Injectable()
export class AlertService {

    private alert: IAlert;

    constructor() {}

    public criarAlert(tipo: EAlertType, strong: string, mensagem: string) {
        return this.alert = {
            tipo: tipo,
            strong: strong,
            mensagem: mensagem
        }
    }
}