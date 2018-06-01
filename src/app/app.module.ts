// Módulos importados
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams, HttpHandler, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { AgmCoreModule } from '@agm/core';

// Rotas
import { rootRouterConfig } from './app.routes'

// Componentes da aplicação
import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';

// Serviços da aplicação
import { HttpService } from './services/httpService'
import { AlertService } from './services/alertService'


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent
  ],  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }) ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAv1xzFrPzHmh8vjXQ7RhscEudWPMvlVL4'
    })
  ],
  providers: [ 
    HttpService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
