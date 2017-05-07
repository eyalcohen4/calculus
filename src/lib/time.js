/* eslint-disable no-param-reassign */

import moment from 'moment';

export function durationBetweenDays(from, to) {
  to = moment.utc(to);
  const duration = moment.duration(to.diff(from));

  return duration.asDays();
}

export function durationBetweenHours(from, to) {
  from = moment(from, 'HH:mm');
  to = moment(to, 'HH:mm');

  const duration = moment.duration(from.diff(to));

  return duration.asHours();
}

export function durationBetweenDaysAndHours(from, to) {
  from = moment(from);
  const duration = moment.duration(from.diff(to));

  return duration.asHours();
}
