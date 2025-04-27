import { Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'landing-page', component: LandingPageComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
    { path: '**', redirectTo: 'error-404' }
];
