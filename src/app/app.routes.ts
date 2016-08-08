import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { AboutComponent }    from './about/about.component';

const routes: RouterConfig = [
  { path: 'home', component: HomeComponent }, //route object
  { path: 'about', component: AboutComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
