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
    // parent, args, context, info
    review(_, args) {
      return reviews.find((review) => review.id === args.id);
    },
    game(_, args) {
        return games.find((game) => game.id === args.id);
      },
    author(_, args) {
        return authors.find((author) => author.id === args.id);
      },
  },
};
