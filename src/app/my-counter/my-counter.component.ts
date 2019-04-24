import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {DecrementAction, IncrementAction, ResetAction} from '../state/counter/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;

  /*Injected the Store service to dispatch actions and select the current state of the counter*/
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new IncrementAction());
  }

  decrement() {
    this.store.dispatch(new DecrementAction());
  }

  reset() {
    this.store.dispatch(new ResetAction());
  }
}
