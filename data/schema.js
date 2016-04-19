import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql';

let counter = 42;

let _links = [
  {_id:1, title:'React.js Main Website', url:'https://facebook.github.io/react/'},
  {_id:2, title:'Relay.js Main Website', url:'https://facebook.github.io/relay/'}
];

let linkType = new GraphQLObjectType({
  name:'Link',
  fields: ()=>({
    _id: {type: GraphQLString},
    title: {type: GraphQLString},
    url: {type: GraphQLString}
  })
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      counter: {
        type: GraphQLInt,
        resolve: ()=> counter
      },
      message: {
        type: GraphQLString,
        resolve: ()=> 'Hello GraphQL!'
      },
      links: {
        type: new GraphQLList(linkType),
        resolve: ()=> _links
      }
    })
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: ()=> ({
      incrementCounter: {
        type: GraphQLInt,
        resolve: ()=> ++counter
      }
    })
  })
});

export default schema;
