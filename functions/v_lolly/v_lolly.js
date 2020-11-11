const { ApolloServer, gql } = require('apollo-server-lambda')
const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();
const shortid = require("shortid")

const typeDefs = gql`
  type Query {
    getVCard: [VCard!]
  }
  type VCard {
    id: ID!
    c1:String!
    c2:String!
    c3:String!
    sender:String!
    rec:String!
    msg:String!
    url:String!
  }

  type Mutation {
    addVCard(c1:String! , 
      c2:String!
      c3:String!,
      sender:String!,
      rec:String!
      msg:String!
    ) : VCard
  }

`

const resolvers = {
  Query: {
    getVCard: (parent, root, args) => {
      return "hello"
    },
  },

  Mutation: {
    addVCard: async (_, { c1, c2, c3, rec, msg, sender }) => {
      console.log("===========")
      console.log(c1, c2, c3, rec, msg, sender)
      console.log("===========")


      try {
        var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });
        var result = await client.query(
          q.Create(
            q.Collection('v_lolly'),
            {
              data: {
                c1, c2, c3, rec, msg, sender,
                link: shortid.generate()
              }
            },
          )
        );
        return result.ref.data

      }
      catch (err) {
        console.log("err", err)
      }
    }

  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()