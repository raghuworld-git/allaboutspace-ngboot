import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideHttpCache, provideHttpCacheLocalStorageStrategy, withHttpCacheInterceptor } from '@ngneat/cashew';
import { environment } from '@env';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([withHttpCacheInterceptor()])),
    provideHttpCache({ ttl: environment.defaultTTLForHttpCacheInMilliSeconds }), provideHttpCacheLocalStorageStrategy(),
    provideNoopAnimations()
  ]
};
