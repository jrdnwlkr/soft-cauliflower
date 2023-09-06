const { User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            return User.findOne({ _id: context.user._id });
        },

    },

    Mutation: {
        login: async (parent, { email, password }) => {
        },
        addUser: async (parent, args) => {
        },
        saveBook: async (parent, args, context) => {
        },
        removeBook: async (parent, args, context) => {
        }
    },
    User: {
    
    }
};