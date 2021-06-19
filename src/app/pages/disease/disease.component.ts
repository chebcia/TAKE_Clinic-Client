import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import diseasesActions from "../../store/actions/diseases.actions";

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss']
})
export class DiseaseComponent {
  constructor(store: Store<AppState>) {
    store.dispatch(diseasesActions.fetchStart());
  }

}
