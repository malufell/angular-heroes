import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// essa função que inicia a aplicação Angular
platformBrowserDynamic()
  .bootstrapModule(AppModule) // bootstrapModule cria uma instância do módulo raiz
  .catch(err => console.error(err));
