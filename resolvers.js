import { games, authors, reviews } from './db.js';

export const resolvers = {
  Query: {
    games() {
      return games; // apollo handles the destructuring of the data under the hood
    },

    authors() {
      return authors;
    },

    reviews() {
      return reviews;
    },
  },
};
