import EmberRouter from '@ember/routing/router';
import config from 'weather-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/:city_id' });
  this.route('index', { path: '/' });
});
