var data = require("sdk/self").data;
var buttons = require('sdk/ui/button/action');

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Show/Hide Password Field",
  icon: {
    "16": "./icon/icon-16.png",
    "32": "./icon/icon-32.png",
    "64": "./icon/icon-64.png"
  },
  onClick: handlePasswordField
});

function handlePasswordField(state) {
  require("sdk/tabs").activeTab.attach({
    contentScriptFile: data.url("./js/password-field.js")
  });
}