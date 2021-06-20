import { Component } from '@angular/core';
import {selectDiseasesData, selectDiseasesDataStatus} from "../../store/selectors/diseases.selectors";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import diseasesActions from "../../store/actions/diseases.actions";
import {DiseaseModel} from "../../models/disease.model";
import {ApiStatusEnum} from "../../models/api-status.enum";

@Component({
  selector: 'app-diseases-table',
  templateUrl: './diseases-table.component.html',
  styleUrls: ['./diseases-table.component.scss']
})
export class DiseasesTableComponent{
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
