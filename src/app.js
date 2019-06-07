/**
 * This file is apollo server, whre we configure graphql server with all configuration
 */

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./modules/typeDefs.index');
const resolvers = require('./modules/resolver.index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = server;
