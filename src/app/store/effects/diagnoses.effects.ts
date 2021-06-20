import { Injectable } from "@angular/core";
import { ApiService } from "../../services/api.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map} from "rxjs/operators";
import { of } from "rxjs";
import diagnosesActions, {
  DiagnosesActionsEnum,
  DiagnosesCreateStart,
  DiagnosesEditStart
} from "../actions/diagnoses.actions";

@Injectable()
export class DiagnosesEffects {
  constructor(private actions: Actions, private apiService: ApiService) {}

  fetchDiagnoses$ = createEffect(() =>
    this.actions.pipe(
      ofType(DiagnosesActionsEnum.FetchData),
      exhaustMap(() => {
        return this.apiService.getDiagnosesAll().pipe(
          map(data => diagnosesActions.fetchSuccess({data})),
          catchError(() => of(diagnosesActions.fetchFailed()))
        )
      })
    )
  );

  createDiagnoses$ = createEffect(() =>
    this.actions.pipe(
      ofType(DiagnosesActionsEnum.Create),
      exhaustMap((action: DiagnosesCreateStart) => {
        return this.apiService.postDiagnose(action.note, action.diseaseId, action.visitId).pipe(
          map(data => diagnosesActions.createSuccess()),
          catchError(() => of(diagnosesActions.createFailed()))
        )
      })
    )
  );

  editDiagnoses$ = createEffect(() =>
    this.actions.pipe(
      ofType(DiagnosesActionsEnum.Edit),
      exhaustMap((action: DiagnosesEditStart) => {
        return this.apiService.putDiagnose(action.id, action.note, action.diseaseId, action.visitId).pipe(
          map(data => diagnosesActions.editSuccess()),
          catchError(() => of(diagnosesActions.editFailed()))
        )
      })
    )
  );
}
