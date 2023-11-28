/*global QUnit*/

sap.ui.define([
	"comsaptest/student/controller/IdentityView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("IdentityView Controller");

	QUnit.test("I should test the IdentityView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
