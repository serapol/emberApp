import Ember from 'ember';

const normalizeNumber = (number) => {
  if (number < 10) {
    return '0' + number;
  }

  return number;
};

export function formatTime([value]) {
  const date = new Date(value);
  const day = normalizeNumber(date.getUTCDate());
  const month = normalizeNumber(date.getUTCMonth() + 1);
  const year = date.getUTCFullYear();
  const hours = normalizeNumber(date.getUTCHours());
  const minutes = normalizeNumber(date.getUTCMinutes());
  const seconds = normalizeNumber(date.getUTCSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

export default Ember.Helper.helper(formatTime);
