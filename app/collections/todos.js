/*global Backbone */
var app = app || {};

(function () {
	'use strict';


	var TodoList = Backbone.Collection.extend({
		model: app.Todo,		
		localStorage: new Backbone.LocalStorage('todos-backbone'),	
	});

	app.Todos = new TodoList();
})();
