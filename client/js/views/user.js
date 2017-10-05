define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/user.html'
], function($, _, Backbone, userTemplate){
    var UserView = Backbone.View.extend({
        el: '.users-container',
        model: {},
        template: _.template(userTemplate),
        
        events: {
            "click .btn": "changeStatus"  
        },
        
        initialize: function(){
            this.render();
        },
        
        render: function(){
            this.$el.append(this.template(this.model));
        },
        
        changeStatus: function(e){
            $(e.target).text("Wait...");
        }
    });
    
    return UserView;
});