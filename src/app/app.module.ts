import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams, HttpHandler } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CadastroUsuarioModalComponent, ModalUsuarioTemplate } from './components/cadastro-usuario-modal/cadastro-usuario-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioModalComponent,
    ModalUsuarioTemplate
  ],  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ 
    HttpClient,
    HttpHandler 
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CadastroUsuarioModalComponent,
    ModalUsuarioTemplate
  ]
})
export class AppModule { }
