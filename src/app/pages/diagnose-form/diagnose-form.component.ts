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

  screenView = ApiStatusEnum.Init;
  screenViews = ApiStatusEnum;

  editMode = false;

  diagnoseCreateState: Observable<ApiStatusEnum>;
  diagnoseEditState: Observable<ApiStatusEnum>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.diagnoseCreateState = store.select(selectDiagnosesCreateStatus);
    this.diagnoseEditState = store.select(selectDiagnosesEditStatus);

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
            this.form.controls.diseaseId.setValue(data.disease);
            this.form.controls.visitId.setValue(data.visit);
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

  refresh(): void {
    this.store.dispatch(diagnosesActions.createReset());

    this.form.value.name = '';
    this.form.value.contagious = '';
  }
}
