import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgHomeComponent } from './Components/org-home/org-home.component';
import { OrgDashboardComponent } from './Components/org-dashboard/org-dashboard.component';
import { OrgAddjobComponent } from './Components/org-addjob/org-addjob.component';

const routes: Routes = [
  {path:'',component:OrgHomeComponent},
  {path:'org_home',component:OrgHomeComponent},
  {path:'org_dashboard',component:OrgDashboardComponent},
  {path:'org_addjob',component:OrgAddjobComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
