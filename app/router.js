import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MyBlogENV.locationType
});

Router.map(function() {
  this.resource('posts', function () {
  	this.route('post', { path: '/:post_id' });
  });
  this.route('posts/post');
});

export default Router;
