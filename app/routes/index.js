import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service loader;

  async model(params) {
    if (!params.city_id) {
      return;
    }

    try {
      this.loader.setLoading(true);
      const data = await this.store.query('forecast', params.city_id);
      this.loader.setLoading(false);
      return { data: data };
    } catch (e) {
      this.loader.setLoading(false);
      return { error: e };
    }
  }
}
