import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model(params) {
    // console.log({params})
    try {
      const data = await this.store.query('forecast', params.city_id);
      return { data: data };
    } catch (e) {
      return { error: e };
    }
  }
}
