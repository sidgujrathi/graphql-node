const countryList = require('./country.model');

const countryResolver = {
  Query: {
    getCountryListByYear: (parent, args) => {
      if (args && args.year) {
        const { year } = args;
        console.log('Year and Type', year, typeof year);
        return countryList.data.filter(obj => obj.from <= year);
      }
      return countryList.data;
    },
  },
};

module.exports = countryResolver;
