import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

    private server: string = 'https://controle-java-backend.herokuapp.com/api/';
    private sucesso: boolean = true;
    private header: HttpHeaders = new HttpHeaders ({
        'Content-Type':  'application/json'
    }); 

    constructor(private http: HttpClient) {}

    public get(path: string, callback: Function) {
        this.http.get(this.server + path, { 
            headers: this.header 
        }).subscribe (
            data  => { callback(data, this.sucesso);  },
            error => { callback(error, !this.sucesso) }
        );  
    }

    public post(path: string, params: string, callback: Function) {
        this.http.post(this.server + path, params, { 
            headers: this.header 
        }).subscribe (
            data  => { callback(data, this.sucesso);  },
            error => { callback(error, !this.sucesso) }
        );
    }

    public put(path: string, params: string, callback: Function) {
        this.http.put(this.server + path, params, { 
            headers: this.header 
        }).subscribe (
            data  => { callback(data, this.sucesso);  },
            error => { callback(error, !this.sucesso) }
        ); 
    }

    public delete(path: string, params: string, callback: Function) {
        this.http.delete(this.server + path, { 
            headers: this.header 
        }).subscribe (
            data  => { callback(data, this.sucesso);  },
            error => { callback(error, !this.sucesso) }
        ); 
    }
}