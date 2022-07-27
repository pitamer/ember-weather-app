import Route from '@ember/routing/route';

const getImageSrc = (iconNumber) => (
  `https://raw.githubusercontent.com/Kuljeet-123/Weather-App/cc91d4a7a19339d4b65cb907e1363e29a77f26fd/src/icons/conditions/${iconNumber}.svg`
);

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/tempData.json');
    let { DailyForecasts } = await response.json();

    return DailyForecasts.map((day) => {
      const date = new Date(day.Date);

      const dateShort = `${date.getDate()}/${date.getMonth() + 1}`;

      const weekDay = date.toLocaleDateString('en-us', { weekday: 'long' });
      const weekDayShort = weekDay.toString().substring(0, 3);

      const images = {
        day: getImageSrc(day.Day.Icon),
        night: getImageSrc(day.Night.Icon),
      };

      return {
        ...day,
        date,
        dateShort,
        weekDay,
        weekDayShort,
        images,
      };
    });
  }
}
