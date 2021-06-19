import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DoctorVisitsModel } from "../models/doctor-visits.model";
import { Observable } from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4200/api/'

  constructor(private http: HttpClient) { }

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
