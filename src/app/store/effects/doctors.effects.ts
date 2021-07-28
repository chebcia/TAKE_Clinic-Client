import { Injectable } from "@angular/core";
import { ApiService } from "../../services/api.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map} from "rxjs/operators";
import { of } from "rxjs";
import doctorsActions, {DoctorsActionsEnum} from "../actions/doctors.actions";
import sessionActions from "../actions/session.actions";

@Injectable()
export class DoctorsEffects {
  constructor(private actions: Actions, private apiService: ApiService) {}

  fetchDoctors$ = createEffect(() =>
    this.actions.pipe(
      ofType(DoctorsActionsEnum.FetchData),
      exhaustMap((action) => {

        return this.apiService.getDoctorsAll().pipe(
          exhaustMap(data => {
            const firstDoctorId = Math.min(...data.map(({ id }) => id)) || 0;
            return [sessionActions.setId({ id: firstDoctorId }), doctorsActions.fetchSuccess({data})];
          }),
          catchError(() => of(doctorsActions.fetchFailed()))
        )
      })
    )
  )
}
