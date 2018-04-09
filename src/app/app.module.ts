// Módulos importados
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams, HttpHandler, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

// Rotas
import { rootRouterConfig } from './app.routes'

// Componentes da aplicação
import { AppComponent } from './app.component';
import { CadastroUsuarioModalComponent, ModalUsuarioTemplate } from './components/cadastro-usuario-modal/cadastro-usuario-modal.component'

// Serviços da aplicação
import { HttpService } from './services/httpService'
import { AlertService } from './services/alertService'

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
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }) 
  ],
  providers: [ 
    HttpService,
    AlertService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CadastroUsuarioModalComponent,
    ModalUsuarioTemplate
  ]
})
export class AppModule { }
