var app = app || {};

(function () {
	'use strict';

	app.Todo = Backbone.Model.extend({
		
		defaults: {
			title: '',
			description: '',
			status: 'todo',
			createdAt: function () {
				var d = new Date(),
					date = d.getDate(),
	   				month = d.getMonth() + 1, 
	    			year = d.getFullYear();
	    		return date + "/" + month + "/" + year;
			}
		}
	});
})();
