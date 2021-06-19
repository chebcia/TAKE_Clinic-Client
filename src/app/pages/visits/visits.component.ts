import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {selectSessionId} from "../../store/selectors/session.selectors";
import visitsActions from "../../store/actions/visits.actions";
import {UserTypesEnum} from "../../store/models/session.model";
import {Observable} from "rxjs";
import {DoctorVisitsModel} from "../../models/doctor-visits.model";
import {selectVisitsData} from "../../store/selectors/visits.selectors";

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {
  sessionId: number | undefined;
  visitsData: Observable<DoctorVisitsModel>;

  dataSource: DoctorVisitsModel = [];

  constructor(private store: Store<AppState>) {
    store.select(selectSessionId).subscribe(sessionId => {
      this.sessionId = sessionId;
    });

    this.visitsData = store.select(selectVisitsData);

    this.visitsData.subscribe(data => {
      this.dataSource = data
    });
  }

  ngOnInit(): void {
    this.getVisits();
  }

  getVisits(): void {
    if (typeof this.sessionId === "undefined") {
      throw new Error("Missing session id");
    };

    this.store.dispatch(visitsActions.fetchStart({ id: this.sessionId, apiType: UserTypesEnum.Doctor }));
  }
}
