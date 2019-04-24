import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgNavbarComponent } from './Components/org-navbar/org-navbar.component';
import { OrgDashboardComponent } from './Components/org-dashboard/org-dashboard.component';
import { OrgHomeComponent } from './Components/org-home/org-home.component';
import { OrgAddjobComponent } from './Components/org-addjob/org-addjob.component';
import { OrgProfileComponent } from './Components/org-profile/org-profile.component';
import { OrgNotificationComponent } from './Components/org-notification/org-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgNavbarComponent,
    OrgDashboardComponent,
    OrgHomeComponent,
    OrgAddjobComponent,
    OrgProfileComponent,
    OrgNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
