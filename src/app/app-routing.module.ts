import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorComponent} from "./pages/doctor/doctor.component";
import {VisitsComponent} from "./pages/visits/visits.component";
import {DiseaseComponent} from "./pages/disease/disease.component";
import {DiagnoseComponent} from "./pages/diagnose/diagnose.component";
import {HomeComponent} from "./pages/home/home.component";

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
    path: 'doctor/diagnosis',
    component: DiagnoseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
