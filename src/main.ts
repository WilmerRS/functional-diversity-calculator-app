import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideIonicAngular,
  IonicRouteStrategy,
} from '@ionic/angular/standalone';

import {
  PreloadAllModules,
  RouteReuseStrategy,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

import { appRoutes } from './app/app.routes';
import { UserStateService } from './app/services/user-state.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules),
      withComponentInputBinding()
    ),
    provideIonicAngular({ mode: 'ios' }),

    // services
    UserStateService,
  ],
}).catch((err) => console.log(err));
