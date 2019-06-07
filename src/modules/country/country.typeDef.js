const { gql } = require('apollo-server-express');

const countryQuery = gql`

type Country {
  name: String,
  code: String,
  languages: [String],
  from: Int
}

type Query {
  getCountryListByYear(year:Int): [Country]!
}
`;

module.exports = countryQuery;
