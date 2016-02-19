import {Page, NavController} from 'ionic/ionic';
//import {AgentService} from './providers/agent-service/agent-service';

/*
  Generated class for the MapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/map/map.html'
})
export class MapPage {
  constructor(nav: NavController) {//, agentService: AgentService) {
    this.nav = nav;
    //this.agents = agentService._dataStore.agents;
  }
}
