//  decorador que transforma uma classe em um módulo Angular
import { NgModule } from '@angular/core';

// módulo que fornece serviços e diretivas para a execução de aplicativos no navegador
// deve ser importado no AppModule para que as aplicações Angular possam ser executadas em um navegador
import { BrowserModule } from '@angular/platform-browser';

// NgModel usado para data binding vem daqui
import { FormsModule } from '@angular/forms';

// apenas para fins didáticos, vai simular API
// intercepts HTTP requests and returns simulated server responses
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

// módulo de roteamento que define as rotas da sua aplicação
import { AppRoutingModule } from './app-routing.module';

// componente principal da aplicação, contém a estrutura básica da interface do usuário
import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ], // Lista de componentes, diretivas e pipes que pertencem a este módulo
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ], // Outros módulos que este módulo depende
  providers: [], //  Serviços que este módulo fornece para serem injetados em outros componentes ou serviços.
  bootstrap: [AppComponent], // O componente principal que deve ser iniciado quando o módulo é iniciado.
})
export class AppModule {} // permite que o módulo seja importado em outros arquivos, se necessário.
