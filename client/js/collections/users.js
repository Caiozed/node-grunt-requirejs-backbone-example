define([
    'jquery',
    'underscore',
    'backbone',
    'js/views/user'
], function($, _, Backbone, UserView){
    var UsersCollection = Backbone.Collection.extend({
        url: "/users",
        
        initialize: function(){
         
        },

        fetchSuccess: function (collection, response) {
            console.log('Collection models: ', collection.models);
            $(".users-container").html("");
            _.each(collection.models, function(user){
                new UserView({model: user.attributes});
            });
        },

        fetchError: function (collection, response) {
            throw new Error("Users fetch error");
        },
        
        showAll: function(){
              this.fetch({
                success: this.fetchSuccess,
                error: this.fetchError
            });
            
        }
    });
    
    return UsersCollection;
});