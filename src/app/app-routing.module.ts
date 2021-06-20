import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorComponent} from "./pages/doctor/doctor.component";
import {VisitsComponent} from "./pages/visits/visits.component";
import {DiseaseComponent} from "./pages/disease/disease.component";
import {DiagnoseComponent} from "./pages/diagnose/diagnose.component";
import {HomeComponent} from "./pages/home/home.component";
import {DiseaseFormComponent} from "./pages/disease-form/disease-form.component";
import {DiagnoseFormComponent} from "./pages/diagnose-form/diagnose-form.component";
import {VisitsFormComponent} from "./pages/visits-form/visits-form.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'doctor',
    component: DoctorComponent,
  },
  {
    path: 'doctor/visits',
    component: VisitsComponent,
  },
  {
    path: 'doctor/visits/:id',
    component: VisitsFormComponent,
  },
  {
    path: 'doctor/diseases',
    component: DiseaseComponent,
  },
  {
    path: 'doctor/diseases/create',
    component: DiseaseFormComponent,
  },
  {
    path: 'doctor/diseases/edit/:id',
    component: DiseaseFormComponent,
  },
  {
    path: 'doctor/diagnoses',
    component: DiagnoseComponent,
  },
  {
    path: 'doctor/diagnoses/create',
    component: DiagnoseFormComponent,
  },
  {
    path: 'doctor/diagnoses/edit/:id',
    component: DiagnoseFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
