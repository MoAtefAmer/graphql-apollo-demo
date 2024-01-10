import db from "./db.js";

export const resolvers = {
  Query: {
    games() {
      return db.games; // apollo handles the destructuring of the data under the hood
    },

    authors() {
      return db.authors;
    },

    reviews() {
      return db.reviews;
    },
    // parent, args, context, info
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },

  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },

  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    },
  },

  Review: {
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id);
    },
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
  },

  Mutation:{
    deleteGame(_,args){
 
      db.games = db.games.filter(game => game.id !== args.id)
      return db.games
    }

  }

};
