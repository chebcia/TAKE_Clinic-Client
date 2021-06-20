import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { DoctorVisitsModel } from "../models/doctor-visits.model";
import { Observable } from "rxjs";
import {map} from "rxjs/operators";
import {DoctorModel} from "../models/doctor.model";
import {DiseaseModel} from "../models/disease.model";
import {DiagnoseModel} from "../models/diagnose.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4200/api/'

  constructor(private http: HttpClient) { }

  getDoctorsAll(): Observable<DoctorModel[]> {
    const url = 'doctors';

    return this.http.get<DoctorModel[]>(`${this.apiUrl}${url}`);
  }

  getDiseasesAll(): Observable<DiseaseModel[]> {
    const url = 'diseases';

    return this.http.get<DiseaseModel[]>(`${this.apiUrl}${url}`);
  }

  postDisease(name: string, contagious: string) {
    const url = `diseases/?name=${name}&contagious=${contagious}`;

    return this.http.post(`${this.apiUrl}${url}`, null);
  }

  putDisease(id: number, name: string, contagious: string) {
    const url = `diseases/${id}?name=${name}&contagious=${contagious}`;

    return this.http.put(`${this.apiUrl}${url}`, null);
  }

  getDiagnosesAll(): Observable<DiagnoseModel[]> {
    const url = 'diagnosis';

    return this.http.get<DiagnoseModel[]>(`${this.apiUrl}${url}`);
  }

  postDiagnose(note: string, diseaseId: number, visitId: number) {
    const url = `diseases/?note=${note}&diseaseId=${diseaseId}&visitId=${visitId}`;

    return this.http.post(`${this.apiUrl}${url}`, null);
  }

  putDiagnose(id: number, note: string, diseaseId: number, visitId: number) {
    const url = `diseases/${id}?note=${note}&diseaseId=${diseaseId}&visitId=${visitId}`;

    return this.http.put(`${this.apiUrl}${url}`, null);
  }

  getDoctorVisits(id: number): Observable<DoctorVisitsModel> {
    const url = `doctors/${id}/visits`;

    return this.http.get<DoctorVisitsModel>(`${this.apiUrl}${url}`).pipe(
      map((value) =>
        value.map(
          (entry) => ({ ...entry, date: new Date(entry.date) })
        )
      )
    );
  }
}
