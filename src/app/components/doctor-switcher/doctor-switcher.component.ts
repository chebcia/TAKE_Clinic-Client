import { Component, OnInit } from '@angular/core';
import {AppState} from "../../store";
import {Store} from "@ngrx/store";
import {combineLatest, Observable} from "rxjs";
import {DoctorModel} from "../../models/doctor.model";
import {selectDoctorsData} from "../../store/selectors/doctors.selectors";
import {selectSessionId} from "../../store/selectors/session.selectors";
import {MatSelectChange} from "@angular/material/select";
import doctorsActions from "../../store/actions/doctors.actions";
import sessionActions from "../../store/actions/session.actions";

@Component({
  selector: 'app-doctor-switcher',
  templateUrl: './doctor-switcher.component.html',
  styleUrls: ['./doctor-switcher.component.scss']
})
export class DoctorSwitcherComponent implements OnInit {
  doctorsList: Observable<DoctorModel[]>;
  selectedDoctor: Observable<number>;
  selectedValue: DoctorModel | null = null;

  constructor(private store: Store<AppState>) {
    this.doctorsList = store.select(selectDoctorsData);
    this.selectedDoctor = store.select(selectSessionId);

    combineLatest([this.doctorsList, this.selectedDoctor]).subscribe(([doctorsList, selectedDoctor]) => {
      this.selectedValue = doctorsList[selectedDoctor];
    })
  }

  ngOnInit(): void {

  }

  changeDoctor(event: MatSelectChange): void {
    const id = event.value;
    this.store.dispatch(sessionActions.setId({ id }));
  }
}
