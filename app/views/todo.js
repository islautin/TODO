
var app = app || {};

$(function () {
	'use strict';

	app.TodoView = Backbone.View.extend({

		tagName:  'li',
		className: 'ui-state-default',
	
		template: Handlebars.compile($('#item-template').html()),
		
		events: {
			"click .customPen": "edit"
		},

		initialize: function () {
			this.listenTo(this.model, "change", this.render);
			this.render();			
			return this;	
		},
		
		render: function () {			
			this.$el.data('id', this.model.get('id')); 
			this.$el.html(this.template(this.model.toJSON()));			
			return this;
		},

		edit: function (event) {
			Backbone.Mediator.publish('view:todo:edit', this.model);			
		}	
		
	});
});

