import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { NopagefoundComponent } from './shader/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', component: NopagefoundComponent}
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true});