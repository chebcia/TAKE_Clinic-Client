import {Component} from '@angular/core';
import {DoctorVisitsModel} from "../../models/doctor-visits.model";
import {combineLatest, Observable} from "rxjs";
import {selectVisitsData} from "../../store/selectors/visits.selectors";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import visitsActions from "../../store/actions/visits.actions";
import {UserTypesEnum} from "../../store/models/session.model";
import {selectSessionId, selectSessionType} from "../../store/selectors/session.selectors";

@Component({
  selector: 'app-visits-table',
  templateUrl: './visits-table.component.html',
  styleUrls: ['./visits-table.component.scss']
})
export class VisitsTableComponent {
  dataSource$: Observable<DoctorVisitsModel>;
  sessionId$: Observable<number>;
  sessionType$: Observable<UserTypesEnum>;

  displayedColumns: string[] = ['id', 'date', 'note', 'status'];

  constructor(private store: Store<AppState>) {
    this.dataSource$ = store.select(selectVisitsData);
    this.sessionId$ = store.select(selectSessionId);
    this.sessionType$ = store.select(selectSessionType);
  }

  refresh() {
    combineLatest([this.sessionId$, this.sessionType$]).subscribe(([sessionId, sessionType]) => {
      this.store.dispatch(visitsActions.fetchStart({ id: sessionId, apiType: sessionType }));
    });
  }
}
