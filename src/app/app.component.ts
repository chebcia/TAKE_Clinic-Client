import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./store";
import doctorsActions from "./store/actions/doctors.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TAKE-Client';

  constructor(store: Store<AppState>) {
    store.dispatch(doctorsActions.fetchStart());
  }
}
