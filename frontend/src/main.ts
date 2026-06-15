import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
// trigger CI domingo, 14 de junio de 2026, 19:02:34 CST
// trigger sonarcloud debug domingo, 14 de junio de 2026, 19:27:24 CST
// retry with fixed projectKey domingo, 14 de junio de 2026, 19:46:51 CST
