import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { AdminComponent } from './components/pages/admin/admin.component';

export const routes: Routes = [
    {
        path: 'pages/login',
        component: LoginComponent
    },
    {
        path: 'pages/admin',
        component: AdminComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/pages/login'
    }

];
