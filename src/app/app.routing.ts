import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { AgendamentosComponent } from './agendamentos/agendamentos.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { LoginComponent} from './login/login.component';
import { AppModule } from './app.module';

const APP_ROUTES: Routes = [
    {path: 'agendamentos', component: AgendamentosComponent},
    /*{path: 'cursos', component: CursosComponent},*/
    {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
    {path: 'unidades', component: UnidadesComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent},
    //{path: '**', redirectTo: '404'}
];

export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot(APP_ROUTES);