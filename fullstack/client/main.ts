/// <reference path='../node_modules/easyrtc/typescript_support/d.ts.files/client/easyrtc.d.ts'"../../../typescript_support/d.ts.files/client/easyrtc.d.ts" />
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
