import { Injectable } from "@angular/core";
import { ApiService } from "../../services/api.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import visitsActions, {ActionFetchStart, VisitFinishStart, VisitsActionsEnum} from "../actions/visits.actions";
import {catchError, exhaustMap, map} from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class VisitsEffects {
  constructor(private actions: Actions, private apiService: ApiService) {}

  fetchVisits$ = createEffect(() =>
    this.actions.pipe(
      ofType(VisitsActionsEnum.FetchData),
      exhaustMap((action: ActionFetchStart) => {

        return this.apiService.getDoctorVisits(action.id).pipe(
          map(data => visitsActions.fetchSuccess({data})),
          catchError(() => of(visitsActions.fetchFailed()))
        )
      })
    )
  );

  finishVisits$ = createEffect(() =>
    this.actions.pipe(
      ofType(VisitsActionsEnum.FinishData),
      exhaustMap((action: VisitFinishStart) => {
        console.debug({ action });

        return this.apiService.putVisitStatus(action.id, action.status).pipe(
          map(() => visitsActions.finishSuccess()),
          catchError(() => of(visitsActions.finishFailed()))
        )
      })
    )
  )
}
