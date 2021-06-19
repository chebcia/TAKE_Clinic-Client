import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorComponent} from "./pages/doctor/doctor.component";
import {VisitsComponent} from "./pages/visits/visits.component";
import {DiseaseComponent} from "./pages/disease/disease.component";
import {DiagnoseComponent} from "./pages/diagnose/diagnose.component";
import {HomeComponent} from "./pages/home/home.component";
import {DiseaseFormComponent} from "./pages/disease-form/disease-form.component";

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
    path: 'doctor/diagnosis',
    component: DiagnoseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
