import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('basics');
  this.route('text');
  this.route('person');
  this.route('thing');
  this.route('mobile');
  this.route('web');
  this.route('location');
});
