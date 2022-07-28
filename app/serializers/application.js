import JSONAPISerializer from '@ember-data/serializer/json-api';

const getIconSource = (iconNumber) =>
  `/assets/images/weather-conditions/${iconNumber}.svg`;

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload) {
    console.log({ payload });

    const result = {
      data: payload.DailyForecasts.map((forecast) => {
        const date = new Date(forecast.EpochDate);
        const dateShort = `${date.getDate()}/${date.getMonth() + 1}`;
        const weekDay = date.toLocaleDateString('en-us', { weekday: 'long' });
        const weekDayShort = weekDay.toString().substring(0, 3);

        const dayIconSrc = getIconSource(forecast.Day.Icon);
        const nightIconSrc = getIconSource(forecast.Night.Icon);

        return {
          id: forecast.EpochDate,
          type: 'forecast',
          attributes: {
            date,
            dateShort,

            weekDay,
            weekDayShort,

            minTemperature: forecast.Temperature.Minimum.Value,
            maxTemperature: forecast.Temperature.Maximum.Value,

            dayIconSrc,
            dayIconPhrase: forecast.Day.IconPhrase,

            nightIconSrc,
            nightIconPhrase: forecast.Night.IconPhrase,
          },
        };
      }),
    };

    console.log(result);
    return result;
  }
}
