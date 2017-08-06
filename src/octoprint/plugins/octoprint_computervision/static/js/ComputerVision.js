/*
 * View model for OctoPrint-Computervision
 *
 * Author: Joshua Middleton
 * License: AGPLv3
 */
$(function() {
    function ComputervisionViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        ComputervisionViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_ComputerVision, #tab_plugin_ComputerVision, ...
        [ /* ... */ ]
    ]);
});
