const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    instrument: [Instrument]
    location: String
    style: String
    skill: String
  }

  type Instrument {
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
  }

  type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;