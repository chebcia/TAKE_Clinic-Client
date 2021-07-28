import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./store";
import doctorsActions from "./store/actions/doctors.actions";
import diseasesActions from "./store/actions/diseases.actions";
import diagnosesActions from "./store/actions/diagnoses.actions";
import visitsActions from "./store/actions/visits.actions";
import {selectSessionId, selectSessionType} from "./store/selectors/session.selectors";
import {combineLatest} from "rxjs";
import {selectDoctorsData} from "./store/selectors/doctors.selectors";
import {filter} from "rxjs/operators";
import {selectDiseasesData} from "./store/selectors/diseases.selectors";
import {selectDiagnosesData} from "./store/selectors/diagnoses.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TAKE-Client';

  constructor(store: Store<AppState>) {
    store.select(selectDoctorsData)
      .pipe(filter(data => !data || data.length <= 0))
      .subscribe(() => {
        store.dispatch(doctorsActions.fetchStart())
      });

    store.select(selectDiseasesData)
      .pipe(filter(data => !data || data.length <= 0))
      .subscribe(() => store.dispatch(diseasesActions.fetchStart()));

    store.select(selectDiagnosesData)
      .pipe(filter(data => !data || data.length <= 0))
      .subscribe(() => store.dispatch(diagnosesActions.fetchStart()));

    combineLatest([store.select(selectSessionId), store.select(selectSessionType)]).subscribe(([id, apiType]) => {
      store.dispatch(visitsActions.fetchStart({ id, apiType }));
    })
  }
}
