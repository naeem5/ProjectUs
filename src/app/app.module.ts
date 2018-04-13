import { ProjectService } from './project/project.service';
import { DeveloperService } from './developer/developer.service';
import { ClientServie } from './client/client.service';
import { ToggleService } from './shared/toggle-service';
import { AuthService } from './auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import * as firebase from 'firebase/app';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
 
import { environment } from '../environments/environment';

import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProjectComponent } from './project/project.component';
import { ClientComponent } from './client/client.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSliderModule} from '@angular/material/slider';
import {MatSortModule} from '@angular/material/sort';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatSidenav,
  MatSidenavContent,
  MatCheckbox,
  MatOptionModule,
  MatSelect,
} from '@angular/material';
import { DeveloperComponent } from './developer/developer.component';
import { NotificationComponent } from './Modals/notification/notification.component';
import { MessagesComponent } from './Modals/messages/messages.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { DeveloperFormComponent } from './developer/developer-form/developer-form.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ReportsComponent } from './reports/reports.component';
import {MatDialogModule} from '@angular/material/dialog';


import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { DeveloperEditComponent } from './developer/developer-edit/developer-edit.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
//import {SidenavResponsiveExample} from './app/sidenav-responsive-example';
//import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SigninComponent,
    SignupComponent,
    ProjectComponent,
    ClientComponent,
    MaterialTestComponent,
    DeveloperComponent,
    NotificationComponent,
    MessagesComponent,
    BreadcrumbComponent,
    ClientFormComponent,
    ProjectFormComponent,
    DeveloperFormComponent,
    InvoicesComponent,
    ReportsComponent,
    ClientEditComponent,
    DeveloperEditComponent,
    ProjectEditComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatButtonToggleModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSliderModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, ToggleService, ClientServie, DeveloperService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
