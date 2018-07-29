import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { UserLoggedGuard } from '../../shared/guards/user-logged-in-guard';


const routes: Routes = [
  {path:'', canActivate: [UserLoggedGuard], component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
