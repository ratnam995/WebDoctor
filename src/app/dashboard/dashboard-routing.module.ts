import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {UserLoggedGuard} from '../shared/guards/user-logged-in-guard';

const routes: Routes = [
  {path: '', canActivate: [UserLoggedGuard], component: DashboardComponent},
  {path: 'add', loadChildren: "./add-edit/add-edit.module#AddEditModule"},
  {path: 'list', loadChildren: "./list/list.module#ListModule"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
