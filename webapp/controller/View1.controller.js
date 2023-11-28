sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },
            onButtonPress: function () {

                // Do something when the button is pressed
                sap.m.MessageToast.show("You press the Button");
                }
        });
    });
