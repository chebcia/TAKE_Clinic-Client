import {Component} from '@angular/core';
import visitsActions from "../../store/actions/visits.actions";

import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {combineLatest} from "rxjs";
import {selectSessionId, selectSessionType} from "../../store/selectors/session.selectors";

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent {
  constructor(store: Store<AppState>) {
    combineLatest([store.select(selectSessionId), store.select(selectSessionType)]).subscribe(([id, apiType]) => {
      store.dispatch(visitsActions.fetchStart({ id, apiType }));
    });
  }
}
