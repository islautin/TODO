var app = app || {};

$(function ($) {
	'use strict';
	app.AppView = Backbone.View.extend({

		el: '#todo',
		template: Handlebars.compile($('#main-template').html()),
		events: {
			'click #showDialog': 'showDialog',
			'sortreceive .sortable': 'changeStatus'			
		},
		

		initialize: function () {
			this.render();			
			this.listenTo(app.Todos, 'add', this.renderNewTodo);
			this.listenTo(app.Todos, 'reset', this.renderAll);
			app.Todos.fetch();
			Backbone.Mediator.subscribe('view:modal:save', this.addNewTodo)
		},
		
		changeStatus: function (event, ui) {
			var newStatus = $(event.target).data('status'),
				modelId = ui.item.data('id');
			var model = app.Todos.get(modelId);
			model.set('status', newStatus);
			model.save();
		},

		render: function () {
			this.$el.html(this.template());
			$( ".sortable" ).sortable({
				connectWith: '.connected'
			}).disableSelection();
    		return this;	
		},
		
		renderAll: function () {
			app.Todos.each(this.renderNewTodo, this);
		},

		addNewTodo: function (todo) {
			app.Todos.create(todo);			
		},
		
		
		renderNewTodo: function (model) {
			var taskView =  new app.TodoView({model: model}),
				status = model.get('status');			
			this.$el.find('[data-status=' + status + ']')
				.prepend(taskView.render().el);	
		},
		
		showDialog: function () {
			var modalView = new app.ModalView();			
			$("#modal").modal("show");
		}		
	});
});
