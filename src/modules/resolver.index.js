const moduleResolver = require('./mdule/module.resolver');
const countryResolver = require('./country/country.resolver');

module.exports = [
  moduleResolver,
  countryResolver,
];
