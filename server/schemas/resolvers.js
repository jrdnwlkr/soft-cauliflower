const { User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            return User.findOne({ _id: context.user._id });
        },
        getSingleUser: async (parent, { user = null, params }) => {
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
        },
        createUser: async (parent, args) => {
            return User.create(args);
        },
        saveBook: async (parent, args, context) => {
            return User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: args } },
                { new: true, runValidators: true }
            );
        },
        deleteBook: async (parent, args, context) => {
            return User.findOneAndDelete({ _id: context.user._id });
        }
    },
};

module.exports = resolvers;