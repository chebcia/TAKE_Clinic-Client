import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import diseasesActions from "../../store/actions/diseases.actions";
import {Observable} from "rxjs";
import {ApiStatusEnum} from "../../models/api-status.enum";
import {selectDiseasesCreateStatus} from "../../store/selectors/diseases.selectors";

@Component({
  selector: 'app-disease-form',
  templateUrl: './disease-form.component.html',
  styleUrls: ['./disease-form.component.scss']
})
export class DiseaseFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl(''),
    contagious: new FormControl(''),
  });

  diseaseCreateState: Observable<ApiStatusEnum>;
  apiStatusEnum = ApiStatusEnum;

  constructor(private store: Store<AppState>) {
    this.diseaseCreateState = store.select(selectDiseasesCreateStatus);
  }

  ngOnInit(): void {
    this.refresh();
  }

  submitForm(event: Event) {
    event.preventDefault();

    const { name, contagious } = this.form.value;

    this.store.dispatch(diseasesActions.createStart({ name, contagious }))
  }

  refresh(): void {
    this.store.dispatch(diseasesActions.createReset());

    this.form.value.name = '';
    this.form.value.contagious = '';
  }
}
