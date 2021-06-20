import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DiseaseModel} from "../../models/disease.model";
import {ApiStatusEnum} from "../../models/api-status.enum";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {selectDiseasesData, selectDiseasesDataStatus} from "../../store/selectors/diseases.selectors";
import diseasesActions from "../../store/actions/diseases.actions";

@Component({
  selector: 'app-diagnoses-table',
  templateUrl: './diagnoses-table.component.html',
  styleUrls: ['./diagnoses-table.component.scss']
})
export class DiagnosesTableComponent {
  dataSource: Observable<DiseaseModel[]>;
  dataStatus: Observable<ApiStatusEnum>;
  apiStatusEnum = ApiStatusEnum;

  displayedColumns: string[] = ['id', 'name', 'contagious', 'controls'];

  constructor(private store: Store<AppState>) {
    this.dataSource = store.select(selectDiseasesData);
    this.dataStatus = store.select(selectDiseasesDataStatus);
  }

  refresh() {
    this.store.dispatch(diseasesActions.fetchStart());
  }
}
