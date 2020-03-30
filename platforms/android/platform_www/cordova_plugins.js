cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-lottie-splashscreen.LottieSplashScreen",
      "file": "plugins/cordova-plugin-lottie-splashscreen/dist/www/lottie-splashscreen.js",
      "pluginId": "cordova-plugin-lottie-splashscreen",
      "clobbers": [
        "lottie.splashscreen"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-lottie-splashscreen": "0.8.1",
    "cordova-plugin-androidx": "1.0.2",
    "cordova-plugin-androidx-adapter": "1.1.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});