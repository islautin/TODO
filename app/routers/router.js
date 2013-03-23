var app = app || {};

(function () {
	'use strict';
	var Router = Backbone.Router.extend();
	app.TodoRouter = new Router();
	Backbone.history.start();
})();
