const { flow, curry } = require('lodash/fp');

const toFixed  = curry((amount, num) => num.toFixed(amount));
// TODO: make this function actually work
const convertTo = curry((currency, value) => {
  const prefixes = {
    GBP: '£',
    BRL: 'R$',
    ARS: '$',
  }
  return `${prefixes[currency]} ${value}`;
});

module.exports = function formatCurrency(rawNumber) {
  return flow(
    Number,
    toFixed(2),
    String,
    convertTo('GBP')
  )(rawNumber);
};
