import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { DeveloperEditComponent } from './developer/developer-edit/developer-edit.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { DeveloperFormComponent } from './developer/developer-form/developer-form.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { NotificationComponent } from './Modals/notification/notification.component';
import { DeveloperComponent } from './developer/developer.component';
import { ProjectComponent } from './project/project.component';
import { ClientComponent } from './client/client.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ReportsComponent } from './reports/reports.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/client', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, data: { breadcrumb: "Sign Up" } },
  { path: 'signin', component: SigninComponent, data: { breadcrumb: "Sign In" } },
  { path: 'client', component: ClientComponent, data: { breadcrumb: "client", formurl: "client-form" }},
  { path: 'client/:id', component: ClientEditComponent },
  { path: 'client/:id/edit', component: ClientEditComponent, data: { breadcrumb: "Client-edit" }},
      
  { path: 'client-form', component: ClientFormComponent, data: { breadcrumb: "client-form" }},

  { path: 'project', component: ProjectComponent, data: { breadcrumb: "Project", formurl: "project-form" }},
  { path: 'project/:id', component: ProjectEditComponent },
  { path: 'project/:id/edit', component: ProjectEditComponent, data: { breadcrumb: "Project-edit" }},

  { path: 'project-form', component: ProjectFormComponent, data: { breadcrumb: "Project-form" } },
  { path: 'developer', component: DeveloperComponent, data: { breadcrumb: "Developer", formurl: "developer-form" }},
  { path: 'developer/:id', component: DeveloperEditComponent },
  { path: 'developer/:id/edit', component: DeveloperEditComponent, data: { breadcrumb: "Developer-edit" }},

  {path: 'developer-form', component: DeveloperFormComponent, data: { breadcrumb: "Developer-form" }},

  
  { path: 'reports', component: ReportsComponent, data: { breadcrumb: "Reports" } },
  { path: 'invoice', component: InvoicesComponent, data: { breadcrumb: "Invoices" } },
  { path: 'clientedit', component: ClientEditComponent, data: { breadcrumb: "Update-Form" } },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
