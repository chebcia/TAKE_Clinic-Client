import { Injectable } from "@angular/core";
import { ApiService } from "../../services/api.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map} from "rxjs/operators";
import { of } from "rxjs";
import diseasesActions, {DiseasesActionsEnum} from "../actions/diseases.actions";

@Injectable()
export class DiseasesEffects {
  constructor(private actions: Actions, private apiService: ApiService) {}

  fetchDiseases$ = createEffect(() =>
    this.actions.pipe(
      ofType(DiseasesActionsEnum.FetchData),
      exhaustMap(() => {
        return this.apiService.getDiseasesAll().pipe(
          map(data => diseasesActions.fetchSuccess({data})),
          catchError(() => of(diseasesActions.fetchFailed()))
        )
      })
    )
  )
}
