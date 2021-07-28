import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiStatusEnum} from "../../models/api-status.enum";
import {combineLatest, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {ActivatedRoute} from "@angular/router";
import {
  selectDiagnosesCreateStatus,
  selectDiagnosesDataById,
  selectDiagnosesEditStatus
} from "../../store/selectors/diagnoses.selectors";
import diagnosesActions from "../../store/actions/diagnoses.actions";
import {DiseaseModel} from "../../models/disease.model";
import {selectDiseasesData} from "../../store/selectors/diseases.selectors";
import {selectVisitsData} from "../../store/selectors/visits.selectors";
import {DoctorVisitsModel} from "../../models/doctor-visits.model";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-diagnose-form',
  templateUrl: './diagnose-form.component.html',
  styleUrls: ['./diagnose-form.component.scss']
})
export class DiagnoseFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    note: new FormControl(''),
    diseaseId: new FormControl(''),
    visitId: new FormControl(''),
  });

  id: number | '' = '';
  diseases: Observable<DiseaseModel[]>;
  visits: Observable<DoctorVisitsModel>;

  screenView = ApiStatusEnum.Init;
  screenViews = ApiStatusEnum;

  editMode = false;

  diagnoseCreateState: Observable<ApiStatusEnum>;
  diagnoseEditState: Observable<ApiStatusEnum>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.diagnoseCreateState = store.select(selectDiagnosesCreateStatus);
    this.diagnoseEditState = store.select(selectDiagnosesEditStatus);
    this.diseases = store.select(selectDiseasesData);
    this.visits = store.select(selectVisitsData);

    combineLatest([this.diagnoseCreateState, this.diagnoseEditState]).subscribe(([createState, editState]) => {
      if (this.editMode) {
        this.screenView = editState;

        return;
      }

      this.screenView = createState;
    });
  }

  ngOnInit(): void {
    this.refresh();

    this.route.url.subscribe((url) => {
      switch (url[2].path) {
        case "edit":
          const id = Number(url[url.length - 1].path);

          this.id = id;

          this.editMode = true;

          this.store.select(selectDiagnosesDataById(id)).subscribe((data) => {
            if (!data) {
              return;
            }

            this.form.controls.note.setValue(data.note);
            this.form.controls.diseaseId.setValue(data.disease.id);
            this.form.controls.visitId.setValue(data.visit.id);
          })

          break;

        case "create":
          this.editMode = false;
          break;
      }
    })
  }

  submitForm(event: Event) {
    event.preventDefault();

    const id = Number(this.id);
    const { note, diseaseId, visitId } = this.form.value;

    if (this.editMode) {
      this.store.dispatch(diagnosesActions.editStart({id, note, diseaseId, visitId}))
    } else {
      this.store.dispatch(diagnosesActions.createStart({note, diseaseId, visitId}))
    }
  }

  changeSelectDiseaseId({ value }: MatSelectChange): void {
    this.form.controls.diseaseId.setValue(value);
  }

  changeSelectVisitId({ value }: MatSelectChange): void {
    this.form.controls.visitId.setValue(value);
  }

  refresh(): void {
    this.store.dispatch(diagnosesActions.createReset());

    this.form.value.name = '';
    this.form.value.contagious = '';
  }
}
