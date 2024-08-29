import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'agencies',
    loadChildren: () =>
      import('@features/agency/ageny.routes').then((r) => r.AGENCY_ROUTES),
  },
];
