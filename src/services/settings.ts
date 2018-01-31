import { Setting } from "../data/settings.interface";

export class SettingsService {
    private settings: Setting[] = [];

    addSetting(setting: Setting) {
        const position = this.settings.findIndex((settingEl: Setting) => {
            return settingEl.id == setting.id;
        });
        this.settings.splice(position, 1);
        this.settings.push(setting);
        console.log(this.settings);
    }

    getSettings() {
        return this.settings.slice();
    }

    getSettingById(id: string) {
        const setting = this.settings.find((settingEl: Setting) => {
            return settingEl.id == id;
        });
        return setting;
    }
}