import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // <-- Import provideAnimations
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { routes } from './app.routes';
import { AuthInterceptor } from './shared/services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(), // <-- Add provideAnimations to the providers array
  ],
};
