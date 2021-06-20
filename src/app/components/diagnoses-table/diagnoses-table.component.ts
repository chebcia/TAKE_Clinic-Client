import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DiseaseModel} from "../../models/disease.model";
import {ApiStatusEnum} from "../../models/api-status.enum";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import diseasesActions from "../../store/actions/diseases.actions";
import {selectDiagnosesData, selectDiagnosesDataStatus} from "../../store/selectors/diagnoses.selectors";
import {DiagnoseModel} from "../../models/diagnose.model";

@Component({
  selector: 'app-diagnoses-table',
  templateUrl: './diagnoses-table.component.html',
  styleUrls: ['./diagnoses-table.component.scss']
})
export class DiagnosesTableComponent {
  dataSource: Observable<DiagnoseModel[]>;
  dataStatus: Observable<ApiStatusEnum>;
  apiStatusEnum = ApiStatusEnum;

  displayedColumns: string[] = ['id', 'note', 'visit', 'disease', 'controls'];

  constructor(private store: Store<AppState>) {
    this.dataSource = store.select(selectDiagnosesData);
    this.dataStatus = store.select(selectDiagnosesDataStatus);
  }

  refresh() {
    this.store.dispatch(diseasesActions.fetchStart());
  }
}
