import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit.component';
import { UserLoggedGuard } from '../../shared/guards/user-logged-in-guard';

const routes: Routes = [
  {path: '', canActivate: [UserLoggedGuard], component:AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditRoutingModule { }
