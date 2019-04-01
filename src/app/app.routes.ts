import { Routes } from '@angular/router';
import { PATH_HOME, PATH_USER } from './app.routes.constantes';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomeComponent},
    { path: PATH_USER, component: UserComponent}
];
