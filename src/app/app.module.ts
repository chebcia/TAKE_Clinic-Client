import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatListModule } from "@angular/material/list";
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DiagnoseComponent } from './pages/diagnose/diagnose.component';
import { DiseaseComponent } from './pages/disease/disease.component';
import { VisitsComponent } from './pages/visits/visits.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import reducers from "./store/reducers";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { VisitsEffects } from "./store/effects/visits.effects";
import { MatTableModule } from "@angular/material/table";
import {CommonModule} from "@angular/common";
import { VisitsTableComponent } from './components/visits-table/visits-table.component';
import {DoctorsEffects} from "./store/effects/doctors.effects";
import { DoctorSwitcherComponent } from './components/doctor-switcher/doctor-switcher.component';
import { MatSelectModule } from '@angular/material/select';
import {DiseasesEffects} from "./store/effects/diseases.effects";
import { DiseasesTableComponent } from './components/diseases-table/diseases-table.component';
import { DiseaseFormComponent } from './pages/disease-form/disease-form.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { DiagnosesTableComponent } from './components/diagnoses-table/diagnoses-table.component';
import {DiagnosesEffects} from "./store/effects/diagnoses.effects";
import { DiagnoseFormComponent } from './pages/diagnose-form/diagnose-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SideNavComponent,
    DoctorComponent,
    DiagnoseComponent,
    DiseaseComponent,
    VisitsComponent,
    HomeComponent,
    VisitsTableComponent,
    DoctorSwitcherComponent,
    DiseasesTableComponent,
    DiseaseFormComponent,
    DiagnosesTableComponent,
    DiagnoseFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([
      VisitsEffects,
      DoctorsEffects,
      DiseasesEffects,
      DiagnosesEffects,
    ]),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
