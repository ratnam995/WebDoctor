import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'add', loadChildren: "./add-edit/add-edit.module#AddEditModule"},
  {path: 'list', loadChildren: "./list/list.module#ListModule"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
