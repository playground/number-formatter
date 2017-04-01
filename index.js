'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
const numFormatter = (number, locale) => {
  return number.toLocaleString(locale);
};

export {numFormatter}