import {Page, NavController} from 'ionic/ionic';
import {SearchForm} from '../../components/search-form/search-form'

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [SearchForm]
})
export class HomePage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
