import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { inject } from '@vercel/analytics';
inject();

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
