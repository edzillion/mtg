import {Page, NavController} from 'ionic/ionic';
import {AgentService} from '../../providers/agent-service/agent-service';
import {Directive} from 'angular2/core';
import * as leaflet from 'angular-leaflet-directive';

deb = 'test';
/*
  Generated class for the MapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/map/map.html',
  //directives: [leaflet-directive]
})
export class MapPage {
  constructor(nav: NavController, agentService: AgentService){//, leaflet: Leaflet) {
    this.nav = nav;
    this.agents = agentService._dataStore.agents;
    //deb = leaflet;
  }
}
