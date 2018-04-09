import { IRetornoBaseModel } from './../base/IRetornoBaseModel';

class retornoLogin {
    login: string;
}

export class IUsuarioCriarRetornoModel implements IRetornoBaseModel {
    sucesso: boolean;
    objeto: retornoLogin;
    mensagem: string;
    message: string;
}