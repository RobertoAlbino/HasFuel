import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

    private header: HttpHeaders = new HttpHeaders ({
        'Content-Type':  'application/json'
    }); 

    constructor(private http: HttpClient) {}

    public get(path: string, callback: Function) {
        this.http.get(path, {
            headers: this.header
        }).subscribe (
            data  => { callback(data,  true);  },
            error => { callback(error, false) }
        );  
    }

    public post(path: string, params: string, callback: Function) {
        this.http.post(path, params, { 
            headers: this.header    
        }).subscribe (
            data  => { callback(data,  true);  },
            error => { callback(error, false) }
        );
    }

    public put(path: string, params: string, callback: Function) {
        this.http.put(path, params, { 
            headers: this.header 
        }).subscribe (
            data  => { callback(data,  true);  },
            error => { callback(error, false) }
        ); 
    }

    public delete(api: string, path: string, params: string, callback: Function) {
        this.http.delete(path, { 
            headers: this.header 
        }).subscribe (
            data  => { callback(data,  true);  },
            error => { callback(error, false) }
        ); 
    }
}