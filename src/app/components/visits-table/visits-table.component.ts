import {Component, OnInit} from '@angular/core';
import {DoctorVisitsModel} from "../../models/doctor-visits.model";
import {combineLatest, Observable} from "rxjs";
import {
  selectVisitsData,
  selectVisitsDataStatus,
  selectVisitsFinishStatus
} from "../../store/selectors/visits.selectors";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import visitsActions from "../../store/actions/visits.actions";
import {UserTypesEnum} from "../../store/models/session.model";
import {selectSessionId, selectSessionType} from "../../store/selectors/session.selectors";
import {ApiStatusEnum} from "../../models/api-status.enum";
import {VisitStatusEnum} from "../../models/visit-status.enum";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-visits-table',
  templateUrl: './visits-table.component.html',
  styleUrls: ['./visits-table.component.scss']
})
export class VisitsTableComponent implements OnInit {
  dataSource: Observable<DoctorVisitsModel>;
  sessionId: Observable<number>;
  sessionType: Observable<UserTypesEnum>;
  dataStatus: Observable<ApiStatusEnum>;
  finishStatus: Observable<ApiStatusEnum>;
  apiStatusEnum = ApiStatusEnum;

  displayedColumns: string[] = ['id', 'date', 'note', 'status', 'controls'];

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {
    this.dataSource = store.select(selectVisitsData);
    this.dataStatus = store.select(selectVisitsDataStatus);
    this.finishStatus = store.select(selectVisitsFinishStatus);
    this.sessionId = store.select(selectSessionId);
    this.sessionType = store.select(selectSessionType);
  }

  ngOnInit(): void {
    this.finishStatus.subscribe((finishStatus) => {
      switch (finishStatus) {
        case ApiStatusEnum.Success:
          this.refresh();
          break;
        case ApiStatusEnum.Failed:
          this.snackBar.open('Cannot finish status of visit', 'Dismiss');
          break;
      }
    })
  }

  refresh() {
    combineLatest([this.sessionId, this.sessionType]).subscribe(([sessionId, sessionType]) => {
      this.store.dispatch(visitsActions.fetchStart({ id: sessionId, apiType: sessionType }));
    });
  }

  finishVisit(id: number): void {
    this.store.dispatch(visitsActions.finishStart({ id, status: VisitStatusEnum.Done }))
  }

  cancelVisit(id: number): void {
    this.store.dispatch(visitsActions.finishStart({ id, status: VisitStatusEnum.Canceled }))
  }
  
}
