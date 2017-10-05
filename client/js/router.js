define([
    'jquery',
    'underscore',
    'backbone',
    'js/views/user',
    'js/collections/users'
], function($, _, Backbone, UserView, UsersCollection){
    var AppRouter = Backbone.Router.extend({
       collection: new UsersCollection(),
       routes: {
            "users": "showUsers",
            "new/user": "addUser",
            "destroy/user/:id": "destroyUser"
       }, 
       
       showUsers: function(){
          this.collection.showAll();
       },
       
       resetPath: function(){
           this.navigate('/', { trigger: false });
       },
       
       addUser: function(){
           var data = {}; 
           data.name = $("#name").val().trim();
           $.ajax({
              url: "/new/user",
              type: "POST",
              contentType: 'application/json',
              data: JSON.stringify(data),
              success: function(response){
                console.log(response);
              },
              error: function(response){
                  console.log(response);
              }
          });
          this.collection.showAll();
          this.resetPath();
       },
       
       destroyUser: function(id){
           var data = {};
           data.id = id;
           $.ajax({
              url: "/destroy/user",
              type: "POST",
              contentType: 'application/json',
              data: JSON.stringify(data),
              success: function(response){
                console.log(response);
              },
              error: function(response){
                  console.log(response);
              }
          });
          this.collection.showAll();
          this.resetPath();
       }
    });
    
    var initialize = function(){
        new AppRouter();
        Backbone.history.start();
    };
    
    return {initialize: initialize};
});