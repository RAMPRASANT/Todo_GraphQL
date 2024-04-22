import graphql from 'graphql';
import mutation from './Mutation.js';
import rootQuery from './RootQueryType.js';

const {
    GraphQLSchema
} = graphql;


const graphQLSchema = new GraphQLSchema({
    query: rootQuery,
    mutation: mutation
})

export default graphQLSchema;
