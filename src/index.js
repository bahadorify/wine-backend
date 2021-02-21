import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
require('dotenv').config();

const { MONGO_USER, MONGO_PASSWORD, MONGO_HOST, PORT } = process.env;

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose.connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:27017/wines?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
};

startServer();
