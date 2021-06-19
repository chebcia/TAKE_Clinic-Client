import { Component } from '@angular/core';
import {selectDiseasesData} from "../../store/selectors/diseases.selectors";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import diseasesActions from "../../store/actions/diseases.actions";
import {DiseaseModel} from "../../models/disease.model";

@Component({
  selector: 'app-diseases-table',
  templateUrl: './diseases-table.component.html',
  styleUrls: ['./diseases-table.component.scss']
})
export class DiseasesTableComponent{
  dataSource$: Observable<DiseaseModel[]>;

  displayedColumns: string[] = ['id', 'name', 'contagious'];

  constructor(private store: Store<AppState>) {
    this.dataSource$ = store.select(selectDiseasesData);
  }

  refresh() {
    this.store.dispatch(diseasesActions.fetchStart());
  }
}
