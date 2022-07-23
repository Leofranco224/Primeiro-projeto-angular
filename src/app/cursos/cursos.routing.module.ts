import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { CursoInfoComponent } from './curso-info/curso-info.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes = [
    {path: '', component: CursosComponent},
    {path: 'info', component: CursoInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}