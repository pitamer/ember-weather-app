import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ForecastsComponent extends Component {
  @tracked inputQuery = '';
  @tracked activeQuery = '';

  @action search() {
    this.activeQuery = this.inputQuery;
  }
}
