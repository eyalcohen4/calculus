/**
 * calculate percentage from number and sum
 * @param {number} number - the number to calc from
 * @param {number} percentage - the percentage to calc of
 */
export function percentFromNumber(number, percentage) {
  return (number / 100) * percentage;
}

/**
 * calculate percentage of number from sum
 * @param {number} number
 * @param {number} sum
 */
export function percentOfNumber(number, sum) {
  return number / (sum / 100);
}

/**
 * calculate what is the 100% number from percentage
 * @param {number} percentage
 * @param {number} number
 */
export function hundredPercentFromPercant(percentage, number) {
  return (number / percentage) * 100;
}
