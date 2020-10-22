const express = require('express');
const {
    ApolloServer
} = require('apollo-server-express');

const schema = require('./schema');
const resolver = require('./resolver');
const {
    graphql
} = require('graphql');

//setup server
const gqlSever = () => {
    const app = express();

    const apolloServer = new ApolloServer({
        typeDefs: schema,
        resolvers: resolver,
        introspection: true,
        playground: true
    });

    apolloServer.applyMiddleware({
        app,
        path: '/',
        cors: true
    });

    return app;
}

module.exports = gqlSever;