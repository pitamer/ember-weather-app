import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ForecastsComponent extends Component {
  @service router;

  @tracked cityId = '';

  @action search() {
    this.router.transitionTo(`/${this.cityId}`);
  }
}
