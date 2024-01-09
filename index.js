import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const port = 4000;

const server = new ApolloServer({
  typeDefs, // definitions of types of data author
  resolvers, // functions that return data
});

const { url } = await startStandaloneServer(server, { listen: { port: port } });

console.log('Server Ready at Port :>> ', port);
