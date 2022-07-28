import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ForecastsComponent extends Component {
  @service router;
  @service loader;

  @tracked cityId = '';

  @action search() {
    this.router.transitionTo(`/${this.cityId}`);
  }

  get loading() {
    console.log(this.loader);
    return this.loader.loading;
  }
}
