import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Agent} from 'interfaces/interfaces';

/*
  Generated class for the AgentService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AgentService {
  agents$: Observable<Array<Agent>>;
  private _agentsObserver: any;
  private _dataStore: {
    agents: Array<Agent>
  };

  constructor(http: Http) {
    this._http = http;
    // Create Observable Stream to output our data
    this.agents$ = new Observable(observer =>
      this._agentsObserver = observer).share();

    this._dataStore = { agents: [] };
  }

  loadAgents() {
      this._http.get('http://localhost:5000/agents').map(response => response.json()).subscribe(data => {
          // Update data store
          this._dataStore.agents = data;

          // Push the new list of todos into the Observable stream
          this._agentsObserver.next(this._dataStore.agents);
      }, error => console.log('Could not load agents.'));
  }

  // getAgents() {
  //   this.http.get('localhost:5000/agents')
  //     .map(res => res.text())
  //     .subscribe(
  //       data => this.randomQuote = data,
  //       err => this.logError(err),
  //       () => console.log('Random Quote Complete')
  //     );
  // }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('localhost:5000/agents')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
