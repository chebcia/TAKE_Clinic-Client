import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import diseasesActions from "../../store/actions/diseases.actions";
import {combineLatest, Observable} from "rxjs";
import {ApiStatusEnum} from "../../models/api-status.enum";
import {
  selectDiseasesCreateStatus,
  selectDiseasesDataById,
  selectDiseasesEditStatus
} from "../../store/selectors/diseases.selectors";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-disease-form',
  templateUrl: './disease-form.component.html',
  styleUrls: ['./disease-form.component.scss']
})
export class DiseaseFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    contagious: new FormControl(''),
  });

  id: number | '' = '';

  screenView = ApiStatusEnum.Init;
  screenViews = ApiStatusEnum;

  editMode = false;

  diseaseCreateState: Observable<ApiStatusEnum>;
  diseaseEditState: Observable<ApiStatusEnum>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.diseaseCreateState = store.select(selectDiseasesCreateStatus);
    this.diseaseEditState = store.select(selectDiseasesEditStatus);

    combineLatest([this.diseaseCreateState, this.diseaseEditState]).subscribe(([createState, editState]) => {
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

          this.store.select(selectDiseasesDataById(id)).subscribe((data) => {
            if (!data) {
              return;
            }

            this.form.controls.name.setValue(data.name);
            this.form.controls.contagious.setValue(data.contagious);
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
    const { name, contagious } = this.form.value;

    if (this.editMode) {
      this.store.dispatch(diseasesActions.editStart({id, name, contagious}))
    } else {
      this.store.dispatch(diseasesActions.createStart({name, contagious}))
    }
  }

  refresh(): void {
    this.store.dispatch(diseasesActions.createReset());

    this.form.value.name = '';
    this.form.value.contagious = '';
  }
}
