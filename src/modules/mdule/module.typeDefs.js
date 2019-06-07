const { gql } = require('apollo-server-express');

const moduleQuery = gql`
extend type Query {
  info: String!
}
`;

module.exports = moduleQuery;
