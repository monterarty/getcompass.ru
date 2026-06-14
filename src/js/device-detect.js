/* Определение устройства/ОС. Вынесено из main.js в отдельный модуль, чтобы
 * переиспользовать в других модулях (напр. vimeo-fullscreen.js) без циклических
 * зависимостей. */
import { UAParser } from "ua-parser-js";

const DeviceDetectParser = new UAParser(window.navigator.userAgent);

export class DeviceDetect {
  static isMobile() {
    return "mobile" === DeviceDetectParser.getDevice().type;
  }

  static isMobileHuawei() {
    return (
      DeviceDetect.isMobile() &&
      "Huawei" === DeviceDetectParser.getDevice().vendor
    );
  }

  static isMobileApple() {
    return (
      DeviceDetect.isMobile() &&
      "Apple" === DeviceDetectParser.getDevice().vendor
    );
  }

  static isMobileAndroid() {
    return (
      DeviceDetect.isMobile() &&
      !DeviceDetect.isMobileHuawei() &&
      "Android" === DeviceDetectParser.getOS().name
    );
  }

  static isAndroid() {
    return "Android" === DeviceDetectParser.getOS().name;
  }

  static get0S() {
    return DeviceDetectParser.getOS()?.name.toLowerCase();
  }

  static isMacOs() {
    return !DeviceDetect.isMobile() && DeviceDetect.get0S()?.includes("mac os");
  }

  static isWindows() {
    return !DeviceDetect.isMobile() && DeviceDetect.get0S()?.includes("window");
  }

  static isLinux() {
    return (
      !DeviceDetect.isMobile() &&
      !DeviceDetect.isWindows() &&
      !DeviceDetect.isMacOs()
    );
  }

  static isIPad() {
    return DeviceDetectParser.getDevice()?.model?.includes("iPad");
  }

  static isIOS() {
    return DeviceDetect.isMobileApple() || DeviceDetect.isIPad();
  }
}
