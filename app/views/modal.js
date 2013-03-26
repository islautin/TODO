var app = app || {};

$(function () {
	'use strict';

	app.ModalView = Backbone.View.extend({
		
		el: "#modal",
		
		events: {
			"click #createNewTodo": "createNewTodo"
		},
	
		template: Handlebars.compile($('#modal-template').html()),		

		
		initialize: function () {
			$('#modal').on('hide', this.cleanUp.bind(this));
			this.render();			
			return this;	
		},
		
		render: function () {
			this.$el.html(this.template());			
			return this;
		},

		cleanUp: function () {
			this.undelegateEvents();
			$("#modal").off('hide', this.cleanUp);
		},
		
		createNewTodo: function () {
			Backbone.Mediator.publish('view:modal:save', this.getData());
			$("#modal").modal('hide');
		},

		getData: function () {
			return {
				title: this.$el.find("#inputTitle").val().trim(),
				description: this.$el.find("#inputDescription").val().trim()
			}
		}		
	});
});