import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsService.getSettingById("ALTERNATIVE_BACKGROUND");
  }
  

  onToggle(toggle: Toggle) {
    this.settingsService.addSetting({
      id: "ALTERNATIVE_BACKGROUND",
      value: toggle.checked ? "true" : "false"
    });  
  }
}
