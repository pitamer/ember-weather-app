import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = '//dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';

  query(store, type, query) {
    const params = {
      apikey: encodeURIComponent(ENV.ACCUWEATHER_ACCESS_TOKEN),
    };
    return this.ajax(this.buildURL(query), 'GET', { data: params });
  }

  pathForType(moduleName) {
    return moduleName;
  }
}
