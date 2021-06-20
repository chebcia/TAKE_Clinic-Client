import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./store";
import doctorsActions from "./store/actions/doctors.actions";
import diseasesActions from "./store/actions/diseases.actions";
import diagnosesActions from "./store/actions/diagnoses.actions";
import visitsActions from "./store/actions/visits.actions";
import {selectSessionId, selectSessionType} from "./store/selectors/session.selectors";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TAKE-Client';

  constructor(store: Store<AppState>) {
    store.dispatch(doctorsActions.fetchStart());

    store.dispatch(diseasesActions.fetchStart());
    store.dispatch(diagnosesActions.fetchStart());

    combineLatest([store.select(selectSessionId), store.select(selectSessionType)]).subscribe(([id, apiType]) => {
      store.dispatch(visitsActions.fetchStart({ id, apiType }));
    })
  }
}
