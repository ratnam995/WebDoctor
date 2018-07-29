import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddEditModule} from './add-edit/add-edit.module';
import { ListModule } from './list/list.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AddEditModule,
    ListModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
