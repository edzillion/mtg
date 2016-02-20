import {Component} from 'angular2/core';
import {IONIC_DIRECTIVES} from 'ionic/ionic';

/*
  Generated class for the SearchForm component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'search-form',
  templateUrl: 'build/components/search-form/search-form.html',
  directives: [IONIC_DIRECTIVES] // makes all Ionic directives available to your component
})
export class SearchForm {
  constructor() {
    this.text = 'Hello World';
  }
}
