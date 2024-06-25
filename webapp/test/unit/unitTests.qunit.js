/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapktholidaylist/holidaylist/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
