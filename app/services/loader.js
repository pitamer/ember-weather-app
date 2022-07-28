import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoaderService extends Service {
  @tracked loading = false;

  @action setLoading(loading) {
    this.loading = loading;
  }
}
