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
			$('#modal').on('hide', function () {
 				this.undelegateEvents();	 
			}.bind(this));
			this.render();			
			return this;	
		},
		
		render: function () {			
			this.$el.html(this.template());			
			return this;
		},
		
		createNewTodo: function () {
			var data = {}
			data.title = this.$el.find("#inputTitle").val();
			data.description = this.$el.find("#inputDescription").val();
			app.Todos.create(data);
			$("#modal").modal('hide');
			this.undelegateEvents();
		}		
	});
});