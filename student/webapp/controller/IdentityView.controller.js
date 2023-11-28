sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.sap.test.student.controller.IdentityView", {
            onInit: function () {
                var oModel = new JSONModel();
                oModel.setData({ fName: "Pankaj", lName: "Prakash", age:"12" });
               // var oView = this.getView();
                //oView.setModel(oModel,"student");
                this.getView().setModel(oModel,"student");
            }
        });
    });
