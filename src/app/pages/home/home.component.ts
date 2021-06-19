import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {UserTypesEnum} from "../../store/models/session.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {selectSessionId, selectSessionType} from "../../store/selectors/session.selectors";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sessionType: Observable<UserTypesEnum>;
  sessionId: Observable<number>;

  constructor(store: Store<AppState>) {
    this.sessionType = store.select(selectSessionType);
    this.sessionId = store.select(selectSessionId);
  }

}
