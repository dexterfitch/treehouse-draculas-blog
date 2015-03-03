Blogger.PostsRoute = Ember.Route.extend({
  // controllerName: 'posts',
  // renderTemplate: function() {
  //   this.render('posts');
  // },
  // The above is handled magically by ember, but if any customizations need to
  // be made, this is the syntax to do it with.
  
  model: function() {
    return posts;
  }
});
