import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MyBlogENV.locationType
});

Router.map(function() {
  this.route('hello', { path: '/hello' });
});

export default Router;
