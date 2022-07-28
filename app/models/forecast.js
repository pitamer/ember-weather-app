import Model, { attr } from '@ember-data/model';

export default class RentalModel extends Model {
  @attr date;
  @attr dateShort;

  @attr weekDay;
  @attr weekDayShort;

  @attr minTemperature;
  @attr maxTemperature;

  @attr dayIconSrc;
  @attr dayIconPhrase;

  @attr nightIconSrc;
  @attr nightIconPhrase;
}
