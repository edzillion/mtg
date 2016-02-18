import {Page} from 'ionic/ionic';
import {HomePage} from '../home/home';
import {MapPage} from '../map/map';
import {SettingsPage} from '../settings/settings';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = MapPage;
    this.tab3Root = SettingsPage;
  }
}
