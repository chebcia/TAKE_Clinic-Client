import { Injectable } from "@angular/core";
import { ApiService } from "../../services/api.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map} from "rxjs/operators";
import { of } from "rxjs";
import diseasesActions, {
  DiseasesActionsEnum,
  DiseasesCreateStart,
  DiseasesEditStart
} from "../actions/diseases.actions";

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
  );

  createDiseases$ = createEffect(() =>
    this.actions.pipe(
      ofType(DiseasesActionsEnum.Create),
      exhaustMap((action: DiseasesCreateStart) => {
        return this.apiService.postDisease(action.name, action.contagious).pipe(
          map(data => diseasesActions.createSuccess()),
          catchError(() => of(diseasesActions.createFailed()))
        )
      })
    )
  );

  editDiseases$ = createEffect(() =>
    this.actions.pipe(
      ofType(DiseasesActionsEnum.Edit),
      exhaustMap((action: DiseasesEditStart) => {
        return this.apiService.putDisease(action.id, action.name, action.contagious).pipe(
          map(data => diseasesActions.editSuccess()),
          catchError(() => of(diseasesActions.editFailed()))
        )
      })
    )
  );
}
