// Include High-Level APIs
var data    = require("sdk/self").data;
var buttons	= require('sdk/ui/button/action');
var tabs	= require("sdk/tabs");


// TODO: Impalement for android version
// TODO: Change lock icon to unlock icon when show password
// TODO: Add count of password fields to button badge

// Create button
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

// Handle click for button
function handlePasswordField(state) {
	var tab = tabs.activeTab.attach({
    contentScriptFile: data.url("./js/password-field.js")
  });
}
