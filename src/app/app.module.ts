import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CadastroUsuarioModalComponent,
    ModalUsuarioTemplate
  ]
})
export class AppModule { }
